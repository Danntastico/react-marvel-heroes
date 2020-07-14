import { useState, useEffect, useRef } from 'react';
import { getSuperHeroById } from '../helpers/SuperHeroAPI';

export const useFetchHeroById = (id) => {
  const isMounted = useRef(true);
  const [hero, setHero] = useState({
    data: null,
    loading: true,
  });
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setHero({
      data: null,
      loading: true,
    });

    getSuperHeroById(id).then((resp) => {
      if (isMounted.current) {
        setHero({
          data: resp[0],
          loading: false,
        });
      }
    });
  }, [id]);

  return hero;
};
