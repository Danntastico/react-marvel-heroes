import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchHeroById } from '../../hooks/useFetchHeroById';
import { constructImagePath } from '../../helpers/constructImagePath';
/* import { Carousel } from '../../components/Carousel/Carousel';
import { CarouselItem } from '../../components/CarouselItem/CarouselItem';
import { getResourceURI } from '../../helpers/SuperHeroAPI';
import { useFetch } from '../../hooks/useFetch'; */

import './styles.css';

export const HeroDetail = () => {
  const params = useParams();
  const { id } = params;
  const { loading, data } = useFetchHeroById(id);
  const { name, comics, description, thumbnail, links } = !!data && data;
  const imgPath = constructImagePath(thumbnail, 'landscape_incredible');
  const { available: availableComics } = !!comics && comics;

  return (
    <div className='character__container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className='profile-pic'>
            <img src={imgPath} alt='profile-pic' className='profile-pic--img' />
          </div>
          <div className='info'>
            <div className='info__name'>
              <h1 className='main__title'>{name}</h1>
              <p className='name__id data-card'>{id}</p>
            </div>
            <div className='info__description'>
              <h3 className='title'>Description</h3>
              <p className='info__description--p'>{description}</p>
            </div>
            <div className='comics'>
              <h3 className='title'>Comics</h3>
              <div className='comics__available'>
                <p className='comics__available--p data-card'>
                  Available comics: {availableComics}
                </p>
              </div>
              <div className='comics__list'>
                {/* <Carousel>
                  {comicsItems.map((i) => (
                    <CarouselItem
                    />
                  ))}
                </Carousel> */}
                <div className='carousel'>
                  <div className='carousel__container'></div>
                </div>
              </div>
            </div>
            <div className='links'>
              <h3 className='title'>Links</h3>
              <div className='link__list'>
                {links.map((i) => (
                  <a key={i.type} href={i.url} className='link__item'>
                    <i className='fas fa-link'></i> {i.type}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
