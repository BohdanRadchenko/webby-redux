import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper" style={{padding: '0 2rem'}}>
        <NavLink to="/" >webby</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/films" className='left'>FILMS</NavLink></li>
          <li><NavLink to="/search">Search film</NavLink></li>
          <li><NavLink to="/create">Add film</NavLink></li>
          <li><NavLink to="/upload">Upload file</NavLink></li>
          <li><NavLink to="/statistics">Statistics</NavLink></li>
        </ul>
      </div>
    </nav>
)
};