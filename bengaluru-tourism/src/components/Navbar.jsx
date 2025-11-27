import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Correct way to import image in Vite React
import logo from '../assets/img/download.png'

export default function Navbar(){
  const loc = useLocation()

  return (
    <nav className="nav">
      <div className="brand">
        <img 
          src={logo} 
          alt="Bengaluru"
          style={{ height: "50px", marginRight: "10px" }}
        />

        <div>
          <div style={{ fontWeight: 700 }}>Bengaluru Tourism</div>
          <div style={{ fontSize: 12, color: '#64748b' }}>
            Garden City • Silicon Valley of India
          </div>
        </div>
      </div>

      <div className="links">
        <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="#destinations">Destinations</a>
      </div>
    </nav>
  )
}
