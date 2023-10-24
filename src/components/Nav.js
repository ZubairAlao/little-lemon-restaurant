import React, { useState } from 'react';
import hamburger from '../assets/hamburger.svg';
import times from '../assets/times.svg';
import { Link } from 'react-router-dom';


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinksClass = menuOpen ? 'nav-links open' : 'nav-links';

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img
          src={menuOpen ? times : hamburger} // Toggle between times and hamburger icons
          alt={menuOpen ? 'Close Menu' : 'Open Menu'} // Provide meaningful alt text
          className={`toggle-icon ${menuOpen ? 'open' : ''}`}
        />
      </div>
      <ul className={navLinksClass}>
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="menus">Menus</a></li>
        <li><a href="booking-page">Reservations</a></li>
        <li><a href="order-online">Order Online</a></li>
        <li><a href="login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
