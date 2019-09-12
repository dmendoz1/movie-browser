import React from 'react';
import {NavLink} from 'react-router-dom';
import mainLogo from '../images/movie-logo.jpg';
const Nav = _ => {
  return (
    <nav>
      <NavLink to="/" exact>
        <img src={mainLogo} alt="movie logo"/>
      </NavLink>
      <div className="nav-links-container">
        <NavLink to="/" exact activeStyle={{color: 'orange'}}>
          <span className="nav-link">Browse</span>
        </NavLink>
        <NavLink to="/theaters-today" activeStyle={{color: 'orange'}}>
          <span className="nav-link">In theaters today</span>
        </NavLink>
        <NavLink to="/popular" activeStyle={{color: 'orange'}}>
          <span className="nav-link">Popular Movies</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;
