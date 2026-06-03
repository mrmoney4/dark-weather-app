import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>Dark Weather</h1>
      <ul>
        <li><b>Home</b></li>
        <li>Download App</li>
        <li>Contact Us</li>
      </ul>
      <button className='signup-btn'>sign up</button>
    </nav>
  );
}

export default Navbar;
