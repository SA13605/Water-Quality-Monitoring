import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import logo from "../public/logo.webp"
import userIcon from "../public/icons8-customer-50.png"

function Navbar() {
  return (
    <>

      <nav className="navbar">
        <div className="logo"><img src={logo} alt="Logo" className='logoImg'/></div>
        <ul className="nav-links">
          <li><Link className='navLinks' to="/home">Home</Link></li>
          <li><Link className='navLinks' to="/services">Services</Link></li>
          <li><Link className='navLinks' to="/contact">Contact</Link></li>
          <li><Link className='navLinks' to="/about">About</Link></li>
        </ul>

        <img src={userIcon} alt="User Icon" className='user-icon'/>
      </nav>


    </>
  )
}

export default Navbar