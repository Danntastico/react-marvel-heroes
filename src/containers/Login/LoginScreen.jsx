import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {
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
  return (
    <div className='login__container'>
      <div className='login'>
        <img
          src='assets/img/headerlogo.svg'
          alt='marvel-log'
          className='login__logo'
        />
        <h1 className='login__title main__title'>Login</h1>
        <form className='login__form'>
          <div className='login__input-div'>
            <div className='i'>
              <i class='fas fa-user'></i>
            </div>
            <div>
              <h5 className='login__input-label'>Username</h5>
              <input
                type='text'
                name='email'
                value={email}
                className='input'
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='login__input-div'>
            <div className='i'>
              <i class='fas fa-lock'></i>
            </div>
            <div>
              <h5 className='login__input-label'>Password</h5>
              <input
                type='password'
                name='password'
                value={password}
                className='input'
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type='submit' onClick={handleClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
