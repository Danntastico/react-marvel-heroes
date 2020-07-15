import React from 'react';

import './styles.css';

export const Carousel = ({ children }) => {
  return (
    <div>
      <div className='carousel__container'>{children}</div>
    </div>
  );
};
