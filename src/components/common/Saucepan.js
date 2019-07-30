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
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" href="/recipes">
              <img src="../../assets/sauce-pan-icon.png" width="80" height="80" alt="Recipes"/>
            </a>
            <div className="navbar-menu">
              <div className="navbar-start">
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link className="navbar-item" id="links" to="/recipes">Recipes</Link>
                {Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/recipes/new"> Submit new recipe</Link>}
                {!Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/login">Login</Link>}
                {!Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/register">Register</Link>}
                {Auth.isAuthenticated() && <Link className="navbar-item" id="links" onClick={this.logout} to="/">Logout</Link>}
                {Auth.isAuthenticated() && <Link className="navbar-item" id="links" to="/profile">Profile</Link>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )

  }

}

export default Saucepan
