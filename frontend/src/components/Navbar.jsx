import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Navbarstyle.css'

const Navbar = () => {
  return (
    <div>
    <nav className="Navbar">
      <div className="Logo">SnapRoom</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="home_link">Home</Link>
        </li>
        <li>
          <Link to="/start" className="Sfree">Start for Free</Link>
        </li>
        <li>
          <Link to="/subscriptions" className="Subscriptions">Subscriptions</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
