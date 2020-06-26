const { Result, Tournament, User } = require('../db/models/')
const tournament = require('../db/models/tournament')
const user = require('../db/models/user')

exports.upsertUserByName = async(name) => {
  let user = await User.findOne({
    where: {
      name,
    },
  })

  if (!user) {
    user = User.create({ name })
  }

  return user
}

exports.anonymizeUser = async(name) => {
  const user = await User.findOne({
    where: {
      name,
    },
  })

  if (!user) {
    throw Error('User not found')
  }

  user.name = user.name.replace(/(.).*(.)/, '$1*****************$2')
  return user.save()
}

exports.updateAllUserPoints = async() => {
  const tournaments = await Tournament.findAll({
    where: {
      tooOld: false,
    },
    attributes: ['id', 'tooOld', 'major'],
  })
  const tournamentIds = tournaments.map(({ id }) => id)
  const tournamentMap = {}

  for (const tournament of tournaments) {
    tournamentMap[tournament.id] = tournament
  }

  const users = await User.findAll()

  for (const user of users) {
    const results = await Result.findAll({
      where: {
        userId: user.id,
        tournamentId: tournamentIds,
      },
    })

    const scoreMajors = results
      .filter((result) => tournamentMap[result.tournamentId].major === true)
      .reduce((acc, result) => acc + result.totalPoints, 0)
    const scoreMinors = results
      .filter((result) => tournamentMap[result.tournamentId].major === false)
      .map((result) => result.totalPoints)
      .sort()
      .slice(0, 2)
      .reduce((a, b) => a + b, 0)
    user.points = scoreMajors + scoreMinors
  }

  const ranking = users.map((user) => user.points)

  for (const user of users) {
    user.rank = ranking.indexOf(user.points) + 1
    await user.save()
  }
}

exports.getUserDetail = async(name) => {
  const user = await User.findOne({
    where: {
      name,
    },
    include: ['results'],
  })

  if (!user) {
    throw Error('User not found')
  }

  let matches = 0
  let wins = 0
  let finalWinner = 0
  let knockout = 0
  let firstHalf = 0
  let majors = 0

  const formattedResults = await Promise.all(
    user.results.map(async(result) => {
      const tournament = await result.getTournament()

      matches += result.matches
      wins += result.victories
      finalWinner += result.rank === 1 ? 1 : 0
      knockout += result.knockout || !tournament.hasKnockout ? 1 : 0
      firstHalf += result.firstHalf ? 1 : 0
      majors += tournament.major ? 1 : 0

      return {
        name: tournament.name,
        major: tournament.major,
        competitive: tournament.competitive,
        date: tournament.date,
        participants: tournament.participants,
        finalPosition: result.rank,
        finalPoints: result.totalPoints,
      }
    })
  )

  return {
    name: user.name,
    points: user.points,
    rank: user.rank,
    victories: finalWinner,
    tournaments: user.results.length,
    majors,
    knockout,
    firstHalf,
    matches,
    wins,
    history: formattedResults,
  }
}

exports.getLadder = async() => {
  return await User.findAll({
    attributes: ['name', 'rank', 'points'],
    order: ['rank'],
  })
}
