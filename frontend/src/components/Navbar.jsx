import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Navbarstyle.css'
import logo from '../../imgs/logo.png'

const Navbar = () => {
  return (
    <div>
    <nav className="Navbar">
      <div className="Logo">
        <img className='logoimg' src={logo} alt="" />
        {/* <h1 className='heading'>SnapRoom</h1> */}
      </div>
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
        {/* <li>
        <Link to="/upload">Upload</Link>
        </li> */}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
