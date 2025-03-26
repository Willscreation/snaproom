import React from 'react'
import './Styles/Navbarstyle.css'
import { Link } from "react-router-dom";

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
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
