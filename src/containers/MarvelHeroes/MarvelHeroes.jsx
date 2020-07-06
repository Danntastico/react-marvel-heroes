import React, { useState, useEffect } from 'react';
import { SearchHero } from '../../components/searchHero/SearchHero';
import { getHeroesByMatch } from '../../helpers/SuperHeroAPI';
import { useSearchResponse } from '../../hooks/useSearchResponse';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import './styles.css';

export const MarvelHeroes = () => {
  const [heroByName, setHeroByName] = useState('');
  const { data, loading } = useSearchResponse(heroByName, 10);
  return (
    <>
      <h1>Marvel</h1>
      <SearchHero searchHero={setHeroByName} />
      <div className='search'>
        <div className='search__results'>
          {data.map((item) => (
            <CharacterCard
              key={item.id}
              imageVariant='standard_xlarge'
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  );
};
