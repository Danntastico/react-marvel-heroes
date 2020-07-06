import { useState, useEffect } from 'react';
import { getHeroesByMatch } from '../helpers/SuperHeroAPI';

export const useSearchResponse = (searchInput, limit) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getHeroesByMatch(searchInput, limit).then((resp) => {
      setState({
        data: resp,
        loading: false,
      });
    });
  }, [searchInput]);

  return state;
};
