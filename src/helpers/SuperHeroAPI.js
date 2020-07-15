import axios from 'axios';
import md5 from 'md5';

const API_URL = 'https://gateway.marvel.com/v1/public/characters';
const ts = '0';
const PUBLIC_KEY = '11f5b6914b4730de47ff5958e302c450';
const PRIVATE_KEY = 'fa5d57d6f5aa31b91223cf59ab14511be03e6711';
const HASH = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const getResourceURI = (uri) => {
  return `${uri}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}`;
};

export const getSuperHeroById = async (id) => {
  if (id === '' || !id) {
    return [];
  } else {
    const url = `${API_URL}/${id}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}`;
    const apiInstance = await axios.get(url);
    const { data } = apiInstance.data;
    const { results } = data;

    const character = results.map((item) => {
      return {
        name: item.name,
        thumbnail: item.thumbnail,
        comics: item.comics,
        description: item.description,
        links: item.urls,
      };
    });
    return character;
  }
};

export const getHeroesByMatch = async (searchInput, limit) => {
  if (searchInput === '' || !searchInput) {
    return [];
  } else {
    const url = `${API_URL}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}&nameStartsWith=${encodeURI(
      searchInput
    )}&limit=${limit}`;
    const resp = await axios.get(url);
    const { data } = await resp.data;
    const { results } = data;

    const heroes = results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail,
      };
    });
    return heroes;
  }
};

export const getComicByURI = async (resourceURI) => {
  if (resourceURI === '' || !resourceURI) {
    return [];
  } else {
    const url = `${resourceURI}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}`;
    const response = await axios.get(url);
    const { data } = await response.data;
    return data;
  }
};
