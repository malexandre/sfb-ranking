import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Ladder from './ladder/Ladder'
import TournamentList from './tournament/TournamentList'
import TournamentDetail from './tournament/TournamentDetail'

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Classement SFB
        </Link>
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
            <Link className="nav-item nav-link active" to="/ladder">
              Ladder <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/tournament">
              Tournament
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
      <Switch>
          <Route path="/tournament/:uuid" component={ TournamentDetail } />
          <Route path="/tournament" component={ TournamentList } />
          <Route path="/test" component={ TournamentDetail } />
          <Route path="/ladder" component={ Ladder } />
          <Route path="/" component={ Ladder } />
        </Switch>
          </div>
    </Router>
  )
}
