import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const NavBar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout,
      payload: {
        logged: false,
      },
    });
  };
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
        <p className=''>{name}</p>
        <button className='data-card btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
