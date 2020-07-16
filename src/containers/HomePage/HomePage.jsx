import React, { useState } from 'react';
import { useFetchAllHeroes } from '../../hooks/useFetchAllHeroes';
import { HeroSearch } from '../../components/HeroSearch/HeroSearch';

import './styles.css';

export const HomePage = () => {
  const [heroByName, setHeroByName] = useState('Spider-man');
  const response = useFetchAllHeroes(heroByName, 10);

  const { data, loading } = response;
  console.log(data);
  return (
    <>
      <div className='main container'>
        <div className='welcome'>
          <h2 className='welcome__title main__title'>Marvel Heroes API</h2>
          <p className='welcome__description paragraph'>
            This is an <span>Application</span> made with React, React Hooks,
            and more! It allows you to explore the full catalog of superheroes
            from the Marvel Universe!
          </p>
        </div>
        <HeroSearch
          heroName={heroByName}
          setHeroByName={setHeroByName}
          data={data}
          isLoading={loading}
        />
      </div>
    </>
  );
};
