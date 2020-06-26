import React, { Component } from 'react'
import { DateTime } from 'luxon'
import { Square, CheckSquare, EyeFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default class LadTournamentListder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: false,
      error: undefined,
    }
    setTimeout(() => this.fetchData())
  }

  checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  fetchData() {
    this.setState({ loading: true, error: undefined })

    fetch('/api/tournaments')
      .then((res) => this.checkFetchStatus(res))
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          loading: false,
          error: undefined,
        })
      })
      .catch((err) => {
        const message = err.response ? err.response.statusText : err
        this.setState({ loading: false, error: `Server error: ${message}` })
      })
  }
  render() {
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
            { this.state.data.map((row, index) => {
              return (
                <tr key={ index }>
                  <th scope="row">{ DateTime.fromISO(row.date).toLocaleString(DateTime.DATE_SHORT) }</th>
                  <td>{ row.name }</td>
                  <td>{ row.major ? <CheckSquare /> : <Square /> }</td>
                  <td>{ row.competitive ? <CheckSquare /> : <Square /> }</td>
                  <td>{ row.participants }</td>
                  <td>{ row.winner }</td>
                  <td>
                    <Link to={ `/tournament/${row.id}` }>
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
}
