import React from 'react'
import "./navbar.css"

function Navbar() {


  return (
    <div className="navbar">
      <nav>
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo"><i class="fas fa-drafting-compass"></i>Aptiloo</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
      </div>
  )
}

export default Navbar
