import React from 'react'
import { DateTime } from 'luxon'
import { Square, CheckSquare, EyeFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const data = [
  {
    name: 'Tournoi initial pour tester des règles',
    major: false,
    competitive: true,
    date: new Date(2020, 5, 30).getTime(),
    participants: 16,
    winner: 'Thagor',
  },
  {
    name: 'Saison 1',
    major: true,
    competitive: true,
    date: new Date(2020, 8, 30).getTime(),
    participants: 38,
    winner: 'Carbo',
  },
  {
    name: 'Saison 2',
    major: true,
    competitive: true,
    date: new Date(2020, 11, 31).getTime(),
    participants: 92,
    winner: 'Meeeex',
  },
]

export default function TournamentList() {
  return (
    <div>
      <h2 className="text-center">Historique des tournois</h2>
      <table className="table table-striped">
        <thead className="bg-primary text-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Nom</th>
            <th scope="col">Majeur</th>
            <th scope="col">Compéttitif</th>
            <th scope="col">Participants</th>
            <th scope="col">Gagnant</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          { data.map((row, index) => {
            return (
              <tr key={ index }>
                <th scope="row">{ DateTime.fromMillis(row.date).toLocaleString(DateTime.DATE_SHORT) }</th>
                <td>{ row.name }</td>
                <td>{ row.major ? <CheckSquare /> : <Square /> }</td>
                <td>{ row.competitive ? <CheckSquare /> : <Square /> }</td>
                <td>{ row.participants }</td>
                <td>{ row.winner }</td>
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
  )
}
