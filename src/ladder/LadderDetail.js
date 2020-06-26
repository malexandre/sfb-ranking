import React, { Component } from 'react'
import { Square, CheckSquare, EyeFill } from 'react-bootstrap-icons'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class LadderDetail extends Component {
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

    fetch(`/api/user/${uuid}`)
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

    console.log(this.state.data)

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
            <p className="card-text">
              Rang { this.state.data.rank } { '  ·  ' } { this.state.data.points } points
            </p>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">
              A participé à { this.state.data.tournaments } tournoi(s), dont { this.state.data.majors } tournoi(s)
              majeur(s), pour un total de { this.state.data.victories } victoires.
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
                <th scope="col">Position de { this.state.data.name }</th>
                <th scope="col">Points de { this.state.data.name }</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              { this.state.data.history.map((row, index) => {
                return (
                  <tr key={ index }>
                    <th scope="row">{ DateTime.fromISO(row.date).toLocaleString(DateTime.DATE_SHORT) }</th>
                    <td>{ row.name }</td>
                    <td>{ row.major ? <CheckSquare /> : <Square /> }</td>
                    <td>{ row.competitive ? <CheckSquare /> : <Square /> }</td>
                    <td>{ row.participants }</td>
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
