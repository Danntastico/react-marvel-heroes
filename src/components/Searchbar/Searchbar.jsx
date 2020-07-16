import React from 'react';
import { useForm } from '../../hooks/useForm';

import './styles.css';

export const Searchbar = ({ setHeroByName }) => {
  const [{ description }, handleInputChange] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHeroByName(description);
  };
  const activeInput =
    description !== '' ? 'herosearch__searchbar--active' : ' ';
  return (
    <form
      className={`herosearch__searchbar ${activeInput}`}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='description'
        placeholder='Search...'
        className='search__input'
        autoComplete='off'
        value={description}
        onChange={handleInputChange}
      />
      <div className='search__btn'>
        <i className='fas fa-search'></i>
      </div>
    </form>
  );
};
