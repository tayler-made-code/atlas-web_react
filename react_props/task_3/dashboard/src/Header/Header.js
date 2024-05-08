import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;