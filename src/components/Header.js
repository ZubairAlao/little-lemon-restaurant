import React from 'react'
import logo from '../assets/Logo.svg'
import Nav from './Nav'

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Logo" />
        <Nav />
    </header>
  )
}

export default Header