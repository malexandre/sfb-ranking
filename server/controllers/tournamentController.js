const csv = require('csvtojson')

const { Tournament, Result } = require('../db/models')
const userController = require('./userController')

function boolParser(item) {
  return ['true', 'True', 'TRUE'].includes(item)
}

async function updateAllTournaments() {
  const majors = await Tournament.findAll({
    where: {
      major: true,
    },
    order: [['date', 'DESC']],
    limit: 4,
  })

  if (majors.length < 3) {
    return
  }

  await Tournament.update(
    {
      tooOld: true,
    },
    {
      where: {
        date: {
          $lte: majors[2].date,
        },
      },
    }
  )

  await Tournament.update(
    {
      tooOld: false,
    },
    {
      where: {
        date: {
          $gt: majors[2].date,
        },
      },
    }
  )
}

function computeLadderPoints(competitive, hasKnockout, major, rank, firstHalf, shared) {
  if (!competitive || !firstHalf) {
    return 0
  }

  switch (rank) {
    case 1:
      return major ? 50 : 35

    case 2:
      return major ? 40 : 25

    case 3:
      return major ? 25 : 15 + (shared ? 5 : 0)

    case 4:
      return (major ? 20 : 10) + (shared ? 5 : 0)

    case 5:
      return (major ? 15 : 5) + (shared ? 4 : 0)
    case 6:
      return (major ? 10 : 4) + (shared ? 3 : 0)
    case 7:
      return (major ? 9 : 3) + (shared ? 2 : 0)
    case 8:
      return (major ? 8 : 2) + (shared ? 2 : 0)

    case 9:
      return major ? 7 : 2 + (shared ? 2 : 0)
    case 10:
      return major ? 6 : 2 + (shared ? 2 : 0)
    case 11:
      return major ? 5 : 2 + (shared ? 1 : 0)
    case 12:
      return (major ? 4 : 2) + (shared ? 1 : 0)

    case 13:
      return major ? 3 : 2 + (shared ? 1 : 0)
    case 14:
      return major ? 3 : 2 + (shared ? 1 : 0)
    case 15:
      return major ? 3 : 2 + (shared ? 1 : 0)
    case 16:
      return major ? 3 : 2 + (shared ? 1 : 0)

    default:
      return major ? 3 : 2
  }
}

exports.importTournament = async(name, major, competitive, date, hasKnockout, data) => {
  data = await csv({
    colParser: {
      name: 'string',
      rank: 'number',
      encounters: 'number',
      matches: 'number',
      victories: 'number',
      knockout: boolParser,
      firstHalf: boolParser,
      shared: boolParser,
    },
  }).fromString(data)

  const tournament = await Tournament.create({
    name,
    major,
    competitive,
    date,
    hasKnockout,
    participants: data.length,
    tooOld: false,
  })

  for (const { name, shared, ...row } of data) {
    const user = await userController.upsertUserByName(name)
    const ladderPoints = computeLadderPoints(competitive, hasKnockout, major, row.rank, row.firstHalf, shared)
    const totalPoints = major ? ladderPoints + 15 : ladderPoints + Math.min(10, row.encounters)

    console.log(`ladderPoints(${ladderPoints}) totalPoints(${totalPoints})`)

    await Result.create({
      ...row,
      ladderPoints,
      totalPoints: competitive ? totalPoints : 0,
      tournamentId: tournament.id,
      userId: user.id,
    })
  }

  await updateAllTournaments()
  return userController.updateAllUserPoints()
}

exports.deleteTournament = async(id) => {
  const tournament = await Tournament.findByPk(id)

  if (!tournament) {
    throw Error('Tournament not found')
  }

  await Result.destroy({
    where: {
      tournamentId: id,
    },
  })
  await tournament.destroy()

  await updateAllTournaments()
  return userController.updateAllUserPoints()
}

exports.getTournaments = async() => {
  return Promise.all(
    (
      await Tournament.findAll({
        order: [['date', 'DESC']],
        include: ['results'],
      })
    ).map(async(tournament) => {
      const winnerResult = tournament.results.reduce(
        (acc, result) => (!acc || acc.rank > result.rank ? result : acc),
        null
      )
      const winner = await winnerResult.getUser()
      return {
        id: tournament.id,
        name: tournament.name,
        major: tournament.major,
        competitive: tournament.competitive,
        hasKnockout: tournament.hasKnockout,
        date: tournament.date,
        participants: tournament.participants,
        winner: winner.name,
      }
    })
  )
}

exports.getTournamentDetail = async(id) => {
  const tournament = await Tournament.findByPk(id, {
    include: ['results'],
  })

  if (!tournament) {
    throw Error('Tournament not found')
  }

  const winnerResult = tournament.results.reduce((acc, result) => (!acc || acc.rank > result.rank ? result : acc), null)
  const winner = await winnerResult.getUser()

  return {
    name: tournament.name,
    major: tournament.major,
    competitive: tournament.competitive,
    hasKnockout: tournament.hasKnockout,
    date: tournament.date,
    participants: tournament.participants,
    winner: winner.name,
    ladder: await Promise.all(
      tournament.results
        .sort((resultA, resultB) => resultA.rank - resultB.rank)
        .map(async(result) => {
          const user = await result.getUser()

          return {
            rank: result.rank,
            name: user.name,
            matches: result.matches,
            knockout: result.knockout,
            firstHalf: result.firstHalf,
            ladderPoints: result.ladderPoints,
            totalPoints: result.totalPoints,
          }
        })
    ),
  }
}
