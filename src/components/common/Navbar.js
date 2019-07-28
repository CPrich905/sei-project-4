import React from 'react'
import { Link } from 'react-router-dom'
// import Auth from '../../lib/Auth'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand has-dropdown">
        <a className="navbar-item">
          <img src="/Users/Home/development/Projects/sei-project-4/src/assets/sauce-pan-icon.png" width="112" height="28" alt="Recipes"/>
        </a>
        <div className="navbar-dropdown">
          <Link className="navbar-item" id="links" to="/recipes">Index</Link>
          <Link className="navbar-item" id="links" to="/">Logout</Link>
          <Link className="navbar-item" id="links" to="/recipes/new">Create New</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
