import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'


class Saucepan extends React.Component {
  constructor() {
    super()

    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand has-dropdown">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <img src="../../assets/sauce-pan-icon.png" width="112" height="120" alt="Recipes"/>
            </a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" id="links" to="/recipes">Index</Link>
              {!Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/login">Login</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/register">Register</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" id="links" onClick={this.logout} to="/">Logout</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/profile">Profile</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/recipes/new"> Submit new recipe</Link>}
            </div>
          </div>
        </div>
      </nav>
    )

  }

}

export default Saucepan
