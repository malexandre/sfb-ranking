import React, { Component } from 'react'
import { Square, CheckSquare } from 'react-bootstrap-icons'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'

export default class TournamentDetail extends Component {
  constructor(props) {
    super(props)

    let error = null

    if (!props.match.isExact || !props.match.params || !props.match.params.uuid) {
      error = 'Ce joueur n\'a pas été trouvé.'
    }

    this.state = {
      data: null,
      loading: false,
      error,
    }
    setTimeout(() => this.fetchData(props.match.params.uuid))
  }

  checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  fetchData(uuid) {
    this.setState({ loading: true, error: undefined })

    fetch(`/api/tournament/${uuid}`)
      .then((res) => this.checkFetchStatus(res))
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          loading: false,
          error: !json || Object.keys(json).length === 0 ? 'Ce joueur n\'a pas été trouvé.' : null,
        })
      })
      .catch((err) => {
        const message = err.response ? err.response.statusText : err
        this.setState({ loading: false, error: `Server error: ${message}` })
      })
  }

  render() {
    if (this.state.error) {
      return <div>{ this.state.error }</div>
    }

    if (!this.state.data) {
      return <div></div>
    }

    return (
      <div>
        <div className="text-center mb-4">
          <button className="btn btn-secondary" onClick={ () => this.props.history.goBack() }>
            Retour
          </button>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title">{ this.state.data.name }</h3>
            <p className="card-text">{ this.state.data.participants } participants</p>
            <p className="card-text">Grand gagnant : { this.state.data.winner }</p>
          </div>
          <div className="card-footer text-muted">
            { [
              DateTime.fromISO(this.state.data.date).toLocaleString(DateTime.DATE_SHORT),
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
                <th scope="col">Phase finale</th>
                <th scope="col">Première moitié</th>
                <th scope="col">Points classement</th>
                <th scope="col">Points total</th>
              </tr>
            </thead>
            <tbody>
              { this.state.data.ladder.map((row, index) => {
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
