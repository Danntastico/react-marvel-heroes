import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const NavBar = () => {
  return (
    <nav className='header__navbar'>
      <div className='navbar__menu'>
        <div className='navbar__logo'>
          <img
            src='./assets/img/headerlogo.svg'
            alt='nav-logo'
            className='logo__img'
          />
        </div>
      </div>
      <div>
        <Link to='/login'>
          <button className='data-card btn'>Logout</button>
        </Link>
      </div>
    </nav>
  );
};
