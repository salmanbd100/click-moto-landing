import React from 'react';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input
        placeholder='Search photos and videos'
        className='search-input'
        type='text'
      />
      <button className='search-submit'>Search</button>
    </div>
  );
};

export default SearchBar;
