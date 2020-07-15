import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Carousel } from '../Carousel/Carousel';
import { CarouselItem } from '../CarouselItem/CarouselItem';

import './styles.css';

export const HeroSearch = ({ setHeroByName, data, isLoading, heroName }) => {
  return (
    <>
      <div className='herosearch  animate__animated animate__fadeInUp'>
        <div className='herosearch__description'>
          <h2 className='title'>Search</h2>
          <p className='paragraph'>
            Type the name of your favorite Marvel comics character
          </p>
        </div>
        <Searchbar setHeroByName={setHeroByName} />
        <div className='carousel'>
          {data && (
            <div>
              {isLoading ? (
                <h2 className='title'>Loading</h2>
              ) : (
                <Carousel>
                  {data.map((i) => (
                    <CarouselItem
                      key={i.id}
                      thumbnail={i.thumbnail}
                      name={i.name}
                      id={i.id}
                    />
                  ))}
                </Carousel>
              )}
            </div>
          )}
        </div>
        {!!data && (
          <div className='data-card herosearch__results'>
            Results of {heroName}
          </div>
        )}
      </div>
    </>
  );
};
