import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <Link className='logo' to='/'>
      Nicholas Newman
    </Link>
  );
};

export default Logo;
