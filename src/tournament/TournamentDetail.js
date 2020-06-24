import React from 'react'
import { Square, CheckSquare } from 'react-bootstrap-icons'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'

const data = {
  name: 'Tournoi initial pour tester des règles',
  major: false,
  competitive: true,
  date: new Date(2020, 5, 30).getTime(),
  participants: 16,
  winner: 'Thagor',
  ladder: [
    {
      rank: 1,
      name: 'Thagor',
      matches: 6,
      knockout: true,
      firstHalf: true,
      ladderPoints: 35,
      totalPoints: 35 + 2 + 6,
    },
    {
      rank: 2,
      name: 'Carbo',
      matches: 6,
      knockout: true,
      firstHalf: true,
      ladderPoints: 25,
      totalPoints: 25 + 2 + 6,
    },
    {
      rank: 4,
      name: 'Meeeex',
      matches: 5,
      knockout: true,
      firstHalf: true,
      ladderPoints: 15,
      totalPoints: 15 + 2 + 5,
    },
    {
      rank: 4,
      name: 'ChuckNorris',
      matches: 5,
      knockout: true,
      firstHalf: true,
      ladderPoints: 15,
      totalPoints: 15 + 2 + 5,
    },
  ],
}

export default function TournamentDetail({ match, history }) {
  if (!match.isExact || !match.params || !match.params.uuid) {
    return <div>{ 'Ce tournoi n\'a pas été trouvé.' }</div>
  }

  return (
    <div>
      <div className="text-center mb-4">
        <button className="btn btn-secondary" onClick={ () => history.goBack() } role="button">
          Retour
        </button>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-title">{ data.name }</h3>
          <p className="card-text">{ data.participants } participants</p>
          <p className="card-text">Grand gagnant : { data.winner }</p>
        </div>
        <div className="card-footer text-muted">
          { [
            DateTime.fromMillis(data.date).toLocaleString(DateTime.DATE_SHORT),
            'Tournoi Majeur',
            'Pris en compte dans le classement',
          ].join('  ·  ') }
        </div>
      </div>
      <div className="mt-4">
        <table className="table table-striped">
          <thead className="bg-primary text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pseudo</th>
              <th scope="col">Matchs joués</th>
              <th scope="col">Bonus phase finale</th>
              <th scope="col">Bonus première moitié</th>
              <th scope="col">Points classement</th>
              <th scope="col">Points total</th>
            </tr>
          </thead>
          <tbody>
            { data.ladder.map((row, index) => {
              return (
                <tr key={ index }>
                  <th scope="row">{ row.rank }</th>
                  <td>{ row.name }</td>
                  <td>{ row.matches }</td>
                  <td>{ row.knockout ? <CheckSquare /> : <Square /> }</td>
                  <td>{ row.firstHalf ? <CheckSquare /> : <Square /> }</td>
                  <td>{ row.ladderPoints }</td>
                  <td>{ row.totalPoints }</td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

TournamentDetail.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      uuid: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}
