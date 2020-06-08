import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Header.css';
import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectPage/ProjectPage';
const Header = () => {
  return (
    <div className='header'>
      <header>
        <nav class='navbar navbar-expand-md navbar-light header-bg'>
          <ul class='navbar-nav'>
            <li class='nav-text'>
              <h3>Connor Musick</h3>
            </li>
            <li class='nav-item'>
              <NavLink
                exact
                className='nav-link'
                to='/'
                activeStyle={{ textDecoration: 'underline' }}>
                Home
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink
                className='nav-link'
                to='/projects'
                activeStyle={{ textDecoration: 'underline' }}>
                Project List
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Route path='/' exact component={HomePage} />
      <Route path='/projects' component={ProjectsPage} />
    </div>
  );
};

export default Header;
