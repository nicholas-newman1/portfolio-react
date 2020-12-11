import React from 'react';
import Hero from './Hero/Hero';
import './homePage.css';
import Projects from './Projects/Projects';

const HomePage = () => {
  return (
    <div className='home'>
      <Hero />
      <Projects />
    </div>
  );
};

export default HomePage;
