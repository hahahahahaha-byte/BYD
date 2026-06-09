import React from 'react'
    import './Navbar.css'
const Navbar = () => {
  return    (
    <div>
      <nav className="navbar">
      <a>
        <img src="/images-removebg-preview.png" className="logo" alt="BYD Logo" />
      </a>
        <ul className="navbar-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Vehicals</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">MMC CCare</a></li>
        </ul>
      </nav>
    </div>
  )
}
    
export default Navbar