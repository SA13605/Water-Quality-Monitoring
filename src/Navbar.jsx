import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>

      <nav className="navbar">
        <div className="logo"><img src="../public/logo.webp" alt="Logo" className='logoImg'/></div>
        <ul className="nav-links">
          <li><Link className='navLinks' to="/home">Home</Link></li>
          <li><Link className='navLinks' to="/services">Services</Link></li>
          <li><Link className='navLinks' to="/contact">Contact</Link></li>
          <li><Link className='navLinks' to="/about">About</Link></li>
        </ul>

        <img src="../public/icons8-customer-50.png" alt="User Icon" className='user-icon'/>
      </nav>


    </>
  )
}

export default Navbar