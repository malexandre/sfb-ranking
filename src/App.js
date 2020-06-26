import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import Ladder from './ladder/Ladder'
import TournamentList from './tournament/TournamentList'
import TournamentDetail from './tournament/TournamentDetail'
import LadderDetail from './ladder/LadderDetail'
import Admin from './Admin'

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <NavLink className="nav-item nav-link" activeClassName="active" to="/ladder">
              Ladder
            </NavLink>
            <NavLink className="nav-item nav-link" activeClassName="active" to="/tournament">
              Tournament
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Switch>
          <Route path="/tournament/:uuid" component={ TournamentDetail } />
          <Route path="/tournament" component={ TournamentList } />
          <Route path="/test" component={ TournamentDetail } />
          <Route path="/ladder/:uuid" component={ LadderDetail } />
          <Route path="/ladder" component={ Ladder } />
          <Route path="/admin" component={ Admin } />
          <Route path="/" component={ Ladder } />
        </Switch>
      </div>
    </Router>
  )
}
