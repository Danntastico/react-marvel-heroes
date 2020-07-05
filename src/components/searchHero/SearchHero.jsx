import React, { useState } from 'react';

export const SearchHero = ({ SearchHero }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchHero(inputValue);
  };

  const handleInputChange = (e) => {
    console.log('This is the value!: ', e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};
