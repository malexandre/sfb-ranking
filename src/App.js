import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import Ladder from './ladder/Ladder'
import TournamentList from './tournament/TournamentList'
import TournamentDetail from './tournament/TournamentDetail'
import LadderDetail from './ladder/LadderDetail'
import Admin from './Admin'
import Rulebook from './rulebook/Rulebook'

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
            <NavLink className="nav-item nav-link" activeClassName="active" to="/">
              Règles du tournoi
            </NavLink>
            <NavLink className="nav-item nav-link" activeClassName="active" to="/classement">
              Classement
            </NavLink>
            <NavLink className="nav-item nav-link" activeClassName="active" to="/tournois">
              Tournament
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Switch>
          <Route path="/tournoi/:uuid" component={ TournamentDetail } />
          <Route path="/tournois" component={ TournamentList } />
          <Route path="/participant/:uuid" component={ LadderDetail } />
          <Route path="/classement" component={ Ladder } />
          <Route path="/admin" component={ Admin } />
          <Route path="/" component={ Rulebook } />
        </Switch>
      </div>
    </Router>
  )
}
