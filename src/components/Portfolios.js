import React, { useEffect, useState } from 'react';
import { portfolios } from '../api/portfolios';

const Portfolios = () => {
  const [allItems, setAllItems] = useState([]);
  const [firstLineItems, setFirstLineItems] = useState([]);
  const [secondLineItems, setSecondLineItems] = useState([]);
  const [thirdLineItems, setThirdLineItems] = useState([]);
  const handleFilterChange = (event) => {
    console.log(event.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    const filteredData = portfolios.filter((value) =>
      e.target.value === 'all' ? true : value.type === e.target.value
    );
    setAllItems(filteredData);
    setFirstLineItems(filteredData.slice(0, 5));
    setSecondLineItems(filteredData.slice(5, 10));
    setThirdLineItems(filteredData.slice(12, 15));
  };
  useEffect(() => {
    setAllItems(portfolios);
    setFirstLineItems(portfolios.slice(0, 5));
    setSecondLineItems(portfolios.slice(5, 10));
    setThirdLineItems(portfolios.slice(10, 15));
  }, []);
  return (
    <div className='portfolio-area'>
      <div className='filter-bar'>
        <form action='' onChange={handleCategoryChange}>
          <ul>
            <li>
              <input
                className='radio'
                type='radio'
                name='category'
                value='all'
              />
              All
            </li>
            <li>
              <input
                className='radio'
                type='radio'
                name='category'
                value='photos'
              />
              Photos
            </li>
            <li>
              <input
                className='radio'
                type='radio'
                name='category'
                value='videos'
              />
              Videos
            </li>
            <li>
              <input
                className='radio'
                type='radio'
                name='category'
                value='freebies'
              />
              Freebies
            </li>
            <li>
              <input
                className='radio'
                type='radio'
                name='category'
                value='360'
              />
              360
            </li>
          </ul>
        </form>
        <div className='select-filter'>
          <select onChange={handleFilterChange}>
            <option value='photos'>Most Photo</option>
            <option value='videos'>Most Recent</option>
            <option value='downloaded'>Most Downloaded</option>
            <option value='appreciated'>Most Appreciated</option>
          </select>
        </div>
      </div>
      <div className='portfolios'>
        <div className='single-line'>
          {firstLineItems &&
            firstLineItems.map((portfolio, i) => {
              return (
                <div className='single-item' key={i}>
                  <img
                    className='portfolio-thumb'
                    src={`/images/${portfolio.image}`}
                    alt=''
                  />
                  <div className='single-item-hover'>
                    <h4 className='artist-title'>Featured artists</h4>
                    {portfolio.featuredArtists.map((artist, i) => {
                      return (
                        <div className='single-artist' key={i}>
                          <img
                            className='artist-thumb'
                            src={`/images/${artist.image}`}
                            alt=''
                          />
                          <div className='artist-info'>
                            <p className='name'>{artist.name}</p>
                            <p className='views'>{artist.views} Views</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
        <div className='single-line'>
          {secondLineItems &&
            secondLineItems.map((portfolio, i) => {
              return (
                <div className='single-item' key={i}>
                  <img
                    className='portfolio-thumb'
                    src={`/images/${portfolio.image}`}
                    alt=''
                  />
                  <div className='single-item-hover'>
                    <h4 className='artist-title'>Featured artists</h4>
                    {portfolio.featuredArtists.map((artist, i) => {
                      return (
                        <div className='single-artist' key={i}>
                          <img
                            className='artist-thumb'
                            src={`/images/${artist.image}`}
                            alt=''
                          />
                          <div className='artist-info'>
                            <p className='name'>{artist.name}</p>
                            <p className='views'>{artist.views} Views</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
        <div className='single-line'>
          {thirdLineItems &&
            thirdLineItems.map((portfolio, i) => {
              return (
                <div className='single-item' key={i}>
                  <img
                    className='portfolio-thumb'
                    src={`/images/${portfolio.image}`}
                    alt=''
                  />
                  <div className='single-item-hover'>
                    <h4 className='artist-title'>Featured artists</h4>
                    {portfolio.featuredArtists.map((artist, i) => {
                      return (
                        <div className='single-artist' key={i}>
                          <img
                            className='artist-thumb'
                            src={`/images/${artist.image}`}
                            alt=''
                          />
                          <div className='artist-info'>
                            <p className='name'>{artist.name}</p>
                            <p className='views'>{artist.views} Views</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
