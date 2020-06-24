import React from 'react'
import { Link } from 'react-router-dom'
import { EyeFill } from 'react-bootstrap-icons'

const data = [
  {
    name: 'Thagor',
    rank: 1,
    points: 2500,
  },
  {
    name: 'Carbo',
    rank: 2,
    points: 2000,
  },
  {
    name: 'Meeeex',
    rank: 3,
    points: 1500,
  },
  {
    name: 'Chuck',
    rank: 4,
    points: 1000,
  },
  {
    name: 'Romain',
    rank: 5,
    points: 500,
  },
]

export default function Ladder() {
  return (
    <div>
      <h2 className="text-center">Classement SFB Francophone</h2>
      <table className="table table-striped">
        <thead className="bg-primary text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pseudo</th>
            <th scope="col">Points</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          { data.map((row, index) => {
            return (
              <tr key={ index }>
                <th scope="row">{ row.rank }</th>
                <td>{ row.name }</td>
                <td>{ row.points }</td>
                <td>
                  <Link to={ `/ladder/${'uuid'}` }>
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
