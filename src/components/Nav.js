import React from 'react';
import {NavLink} from 'react-router-dom';
import mainLogo from '../images/movie-logo.jpg';
const Nav = _ => {
  return (
    <nav>
      <NavLink to={process.env.PUBLIC_URL + '/'} exact>
        <img src={mainLogo} alt="movie logo"/>
      </NavLink>
      <div className="nav-links-container">
        <NavLink to={process.env.PUBLIC_URL + '/'} exact activeStyle={{color: 'orange'}}>
          <span className="nav-link">Browse</span>
        </NavLink>
        <NavLink to={process.env.PUBLIC_URL + '/theaters-today'} activeStyle={{color: 'orange'}}>
          <span className="nav-link">In theaters today</span>
        </NavLink>
        <NavLink to={process.env.PUBLIC_URL + '/popular'} activeStyle={{color: 'orange'}}>
          <span className="nav-link">Popular Movies</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;
