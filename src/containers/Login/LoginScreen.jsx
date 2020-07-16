import React, { useContext, useRef, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {
  const userInput = useRef(false);
  const passInput = useRef(false);

  const { dispatch } = useContext(AuthContext);
  const [{ email, password }, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  });

  const handleClick = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({
      type: types.login,
      payload: {
        name: 'danilo',
      },
    });
    history.replace(lastPath);
  };

  const handleFocus = (ref) => {
    ref.current.classList.add('focus');
  };

  const handleBlur = (ref, value) => {
    if (value === '') {
      ref.current.classList.remove('focus');
    }
  };

  return (
    <div className='login__container'>
      <div className='login'>
        <img
          src='assets/img/headerlogo.svg'
          alt='marvel-log'
          className='login__logo'
        />
        <form className='login__form'>
          <h1 className='login__title main__title'>Welcome!</h1>
          <div ref={userInput} className={`login__input-div`}>
            <div className='i'>
              <i className='fas fa-user'></i>
            </div>
            <div>
              <h5 className='login__input-label'>Username</h5>
              <input
                type='text'
                name='email'
                value={email}
                className='input'
                onChange={handleInputChange}
                onFocus={() => handleFocus(userInput)}
                onBlur={() => handleBlur(userInput, email)}
                autoComplete='off'
              />
            </div>
          </div>
          <div ref={passInput} className='login__input-div'>
            <div className='i'>
              <i className='fas fa-lock'></i>
            </div>
            <div>
              <h5 className='login__input-label'>Password</h5>
              <input
                type='password'
                name='password'
                value={password}
                className='input'
                onChange={handleInputChange}
                onFocus={() => handleFocus(passInput)}
                onBlur={() => handleBlur(passInput, password)}
                autoComplete='off'
              />
            </div>
          </div>
          <button
            type='submit'
            onClick={handleClick}
            className='btn login__btn'
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};
