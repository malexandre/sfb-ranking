import 'whatwg-fetch'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { EyeFill } from 'react-bootstrap-icons'


export default class Ladder extends Component {
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

    fetch('/api/ladder')
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
    if (this.state.error) {
      return <div>{ this.state.error }</div>
    }

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
            { this.state && this.state.data && this.state.data.map((row, index) => {
              return (
                <tr key={ index }>
                  <th scope="row">{ row.rank }</th>
                  <td>{ row.name }</td>
                  <td>{ row.points }</td>
                  <td>
                    <Link to={ `/participant/${encodeURIComponent(row.name)}` }>
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
