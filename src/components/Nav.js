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
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="menus">Menus</Link></li>
        <li><Link to="booking-page">Reservations</Link></li>
        <li><Link to="order-online">Order Online</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
