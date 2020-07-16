import React from 'react';

export const Carousel = ({ children }) => {
  return (
    <div>
      <div className='carousel__container'>{children}</div>
    </div>
  );
};
