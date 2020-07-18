import React from 'react';
import { categories } from '../api/categories';
import { portfolio } from '../api/portfolio';

import {
  Container,
  TopNavbar,
  MainBanner,
  SingleCategory,
} from '../components';

function Home() {
  return (
    <div className='home-page'>
      <Container fluid>
        <TopNavbar />
        <MainBanner />
      </Container>
      <div className='product-area'>
        <Container>
          <div className='product-wrapper'>
            <h2 className='top-category-title'>Top categories</h2>
            <div className='top-categories'>
              {categories &&
                categories.map((category, i) => {
                  return (
                    <SingleCategory
                      key={i}
                      title={category.title}
                      image={category.image}
                      url={category.url}
                    />
                  );
                })}
            </div>
            <div className='portfolio-area'>
              <div className='filter-bar'>
                <ul>
                  <li>All</li>
                  <li>Photos</li>
                  <li>Videos</li>
                  <li>Freebies</li>
                  <li>360</li>
                </ul>
                <div className='select-filter'>
                  <select>
                    <option value='recent'>Most Recent</option>
                    <option value='viewed'>Most Recent</option>
                    <option value='downloaded'>Most Downloaded</option>
                    <option value='appreciated'>Most Appreciated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
