import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

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
    <div className='container'>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
