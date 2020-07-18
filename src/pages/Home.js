import React from 'react';
import { categories } from '../api/categories';

import {
  Container,
  TopNavbar,
  MainBanner,
  SingleCategory,
  Portfolios,
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
            <Portfolios />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
