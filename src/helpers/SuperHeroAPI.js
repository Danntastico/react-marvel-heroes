import axios from 'axios';
import md5 from 'md5';

const API_URL = 'http://gateway.marvel.com/v1/public/characters';
const ts = '0';
const PUBLIC_KEY = '11f5b6914b4730de47ff5958e302c450';
const PRIVATE_KEY = 'fa5d57d6f5aa31b91223cf59ab14511be03e6711';
const HASH = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const getSuperHero = async () => {
  const url = `${API_URL}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}`;
  const apiInstance = await axios.get(url);
  const { data } = apiInstance.data;
  return data;
};

/* export const getSuperHeroById = async (id) => {
  const url = `${API_URL}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${HASH}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data;
}; */
