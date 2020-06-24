import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Ladder from './ladder/Ladder'
import TournamentList from './tournament/TournamentList'

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Classement SFB</a>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Ladder <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/tournament">Tournament</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/tournament">
          <div className="container mt-4">
            <TournamentList />
          </div>
        </Route>
        <Route path="/">
          <div className="container mt-4">
            <Ladder />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}
