import React from 'react'
import { Square, CheckSquare, EyeFill } from 'react-bootstrap-icons'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const data = {
  name: 'Thagor',
  points: 2500,
  rank: 1,
  victories: 1,
  tournaments: 3,
  majors: 2,
  history: [
    {
      name: 'Tournoi initial pour tester des règles',
      major: false,
      competitive: true,
      date: new Date(2020, 5, 30).getTime(),
      participants: 16,
      winner: 'Thagor',
      finalPosition: 1,
      finalPoints: 500,
    },
    {
      name: 'Saison 1',
      major: true,
      competitive: true,
      date: new Date(2020, 8, 30).getTime(),
      participants: 38,
      winner: 'Carbo',
      finalPosition: 2,
      finalPoints: 1000,
    },
    {
      name: 'Saison 2',
      major: true,
      competitive: true,
      date: new Date(2020, 11, 31).getTime(),
      participants: 92,
      winner: 'Meeeex',
      finalPosition: 2,
      finalPoints: 1000,
    },
  ],
}

export default function LadderDetail({ match, history }) {
  if (!match.isExact || !match.params || !match.params.uuid) {
    return <div>{ 'Ce joueur n\'a pas été trouvé.' }</div>
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
          <p className="card-text">
            Rang { data.rank } { '  ·  ' } { data.points } points
          </p>
        </div>
        <div className="card-footer text-muted">
          <p className="card-text">
            A participé à { data.tournaments } tournoi(s), dont { data.majors } tournoi(s) majeur(s),{ ' ' }
            pour un total de { data.victories } victoires.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <table className="table table-striped">
          <thead className="bg-primary text-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Nom</th>
              <th scope="col">Majeur</th>
              <th scope="col">Compéttitif</th>
              <th scope="col">Participants</th>
              <th scope="col">Gagnant</th>
              <th scope="col">Position de { data.name }</th>
              <th scope="col">Points de { data.name }</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            { data.history.map((row, index) => {
              return (
                <tr key={ index }>
                  <th scope="row">{ DateTime.fromMillis(row.date).toLocaleString(DateTime.DATE_SHORT) }</th>
                  <td>{ row.name }</td>
                  <td>{ row.major ? <CheckSquare /> : <Square /> }</td>
                  <td>{ row.competitive ? <CheckSquare /> : <Square /> }</td>
                  <td>{ row.participants }</td>
                  <td>{ row.winner }</td>
                  <td>{ row.finalPosition }</td>
                  <td>{ row.finalPoints }</td>
                  <td>
                    <Link to={ `/tournament/${'uuid'}` }>
                      <EyeFill />
                    </Link>
                  </td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

LadderDetail.propTypes = {
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
