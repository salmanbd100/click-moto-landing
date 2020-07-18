import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${props.primary ? 'primary' : ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
