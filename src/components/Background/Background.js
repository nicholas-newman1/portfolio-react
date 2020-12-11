import React from 'react';
import src from '../../images/background.jpg';
import './background.css';

const Background = () => {
  return (
    <div className='background'>
      <img className='background__image' src={src} alt='background' />
    </div>
  );
};

export default Background;
