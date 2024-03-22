import React from 'react';
import { NavLink } from 'react-router-dom';

function Banner() {
  return (
    <header className="banner">
      <h1>My Website</h1>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active' : '')}>Chat</NavLink>
        <NavLink to="/counter" className={({ isActive }) => (isActive ? 'active' : '')}>Counter</NavLink>
      </nav>
    </header>
  );
}

export default Banner;
