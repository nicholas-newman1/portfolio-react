import React from 'react';
import SocialLinks from '../../../components/SocialLinks/SocialLinks';
import './hero.css';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className='container'>
        <h1 className='hero__heading'>Hi, I'm Nicholas.</h1>
        <p className='hero__text'>Your Future Web Developer</p>
        <div className='hero__social'>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;