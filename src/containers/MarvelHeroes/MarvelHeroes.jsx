import React, { useState } from 'react';
import { SearchHero } from '../../components/searchHero/SearchHero';

export const MarvelHeroes = () => {
  const [heroByName, setHeroByName] = useState('');

  console.log(heroByName);
  return (
    <>
      <h1>Marvel</h1>
      <SearchHero searchHero={setHeroByName} />
    </>
  );
};
