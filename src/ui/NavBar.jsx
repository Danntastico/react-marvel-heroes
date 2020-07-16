import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
      <div className='navbar__logo'>
        <img
          src='./assets/img/headerlogo.svg'
          alt='nav-logo'
          className='logo__img'
        />
      </div>
      <div className='navbar__username'>
        <p className='navbar__username--p'>
          <i className='far fa-user'></i> {name}
        </p>
        <button
          className='navbar__logout-btn animate__animated animate__fadeInUp'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
