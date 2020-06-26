import 'whatwg-fetch'
import React, { Component } from 'react'

const defaultState = {
  name: '',
  major: false,
  competitive: false,
  hasKnockout: false,
  date: new Date().toISOString().split('T')[0],
  data: '',
  status: null,
  error: '',
}

export default class Ladder extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, defaultState)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = ['major', 'competitive', 'hasKnockout'].includes(target.name) ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
      status: null,
    })
  }

  checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch('/api/admin/uplaod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        major: this.state.major,
        competitive: this.state.competitive,
        hasKnockout: this.state.hasKnockout,
        date: this.state.date,
        data: this.state.data,
      }),
    })
      .then((res) => this.checkFetchStatus(res))
      .then(() => {
        this.setState(Object.assign({}, defaultState, { status: 'success' }))
      })
      .catch((err) => {
        const message = err.response ? err.response.statusText : err
        this.setState(Object.assign({}, defaultState, { status: 'error', error: message }))
      })
  }

  render() {
    return (
      <div>
        { this.state.status === 'success' && (
          <div className="alert alert-success" role="alert">
            } Le tournoi a bien été sauvegardé !
          </div>
        ) }
        { this.state.status === 'error' && (
          <div className="alert alert-danger" role="alert">
            Erreur durant la sauvegarde : { this.state.error }
          </div>
        ) }
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label htmlFor="name">Nom du tournoi</label>
            <input type="text"
              className="form-control"
              id="name"
              name="name"
              value={ this.state.name }
              onChange={ this.handleInputChange }/>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              type="checkbox"
              value={ this.state.major }
              id="major"
              name="major"
              onChange={ this.handleInputChange }/>
            <label className="form-check-label" htmlFor="major">
              Tournoi majeur
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              type="checkbox"
              value={ this.state.competitive }
              id="competitive"
              name="competitive"
              onChange={ this.handleInputChange }/>
            <label className="form-check-label" htmlFor="competitive">
              Tournoi compétitif
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              type="checkbox"
              value={ this.state.hasKnockout }
              id="hasKnockout"
              name="hasKnockout"
              onChange={ this.handleInputChange }/>
            <label className="form-check-label" htmlFor="hasKnockout">
              Tournoi avec phase finale
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date de fin du tournoi</label>
            <input type="date"
              className="form-control"
              id="date"
              name="date"
              value={ this.state.date }
              onChange={ this.handleInputChange }/>
          </div>
          <div className="form-group">
            <label htmlFor="data">Data CSV</label>
            <textarea className="form-control"
              id="data"
              name="data"
              rows="3"
              value={ this.state.data }
              onChange={ this.handleInputChange }></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Ajouter le tournoi
          </button>
        </form>
      </div>
    )
  }
}
