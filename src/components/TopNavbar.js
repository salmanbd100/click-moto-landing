import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Button, Devider } from '../components';

const TopNavbar = () => {
  return (
    <div className='top-navbar'>
      <Logo />
      <ul className='navbar'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Explore
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Discover
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            For Professionals
          </Link>
        </li>
        <li className='nav-item'>...</li>
        <li className='nav-item'>
          <Button>Submit Photos</Button>
        </li>
        <li className='nav-item'>
          <Devider />
        </li>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Login
          </Link>
        </li>
        <li className='nav-item'>
          <Button primary>Join Free</Button>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
