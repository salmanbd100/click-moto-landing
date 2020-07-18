import React from 'react';
import { SearchBar } from './';

const MainBanner = () => {
  return (
    <div
      className='main-banner'
      style={{ backgroundImage: `url(/images/banner-bg)` }}
    >
      <div className='banner-content'>
        <h1 className='main-title'>
          Your local source of high quality images and videos directly from
          their creators
        </h1>
        <SearchBar />
        <p className='banner-text'>
          Recommended: summer, food, covid-19, real estate, love
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
