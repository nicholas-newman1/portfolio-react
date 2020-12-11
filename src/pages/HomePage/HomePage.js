import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import './homePage.css';
import Projects from './Projects/Projects';

const HomePage = () => {
  return (
    <div className='home'>
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default HomePage;
