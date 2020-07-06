import React from 'react';
import { constructImagePath } from '../../helpers/constructImagePath';
import './styles.css';
import 'animate.css';
export const CharacterCard = ({ thumbnail, name, imageVariant }) => {
  const imgPath = constructImagePath(thumbnail, imageVariant);

  return (
    <div className='card animate__animated animate__fadeInLeft'>
      <img src={imgPath} alt={name} />
      <p>{name}</p>
    </div>
  );
};
