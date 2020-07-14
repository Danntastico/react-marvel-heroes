import { useState, useEffect } from 'react';
import { getHeroesByMatch } from '../helpers/SuperHeroAPI';

export const useFetchAllHeroes = (searchInput, limit) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    getHeroesByMatch(searchInput, limit).then((resp) => {
      setState({
        data: resp,
        loading: false,
      });
    });
  }, [searchInput, limit]);

  return state;
};
