import React from 'react';
import { constructImagePath } from '../../helpers/constructImagePath';

import { Link } from 'react-router-dom';

export const CarouselItem = ({ thumbnail, name, id }) => {
  const imgPath = constructImagePath(thumbnail, 'portrait_xlarge');

  return (
    <div className='carousel__item'>
      <div className='item__pp'>
        <img src={imgPath} alt='hero-character' className='item__img' />
      </div>
      <div className='item__info'>
        <div className='item__name'>
          <p className='item__name--p'>{name}</p>
        </div>
        <div className='info__btns'>
          <Link className='item__info--btn data-card' to={`/character/${id}`}>
            <i className='fas fa-info'></i>
          </Link>
          <div className='item__info--btn data-card'>
            <i className='fas fa-heart'></i>
          </div>
        </div>
      </div>
    </div>
  );
};
