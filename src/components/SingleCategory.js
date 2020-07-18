import React from 'react';

const SingleCategory = ({ title, image, url }) => {
  const imgUrl = `./images/${image}`;
  console.log(imgUrl);
  return (
    <div className='single-category'>
      <img className='category-img' src={imgUrl} alt='' />
      <h6 className='category-title'>{title}</h6>
    </div>
  );
};

export default SingleCategory;
