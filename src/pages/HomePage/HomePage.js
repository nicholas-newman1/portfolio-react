import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
