import React, { useRef } from 'react';
import SocialLinks from '../../../components/SocialLinks/SocialLinks';
import useAnimation from '../../../hooks/useAnimation';
import './hero.css';

const Hero = () => {
  const heroRef = useRef();

  useAnimation(heroRef);

  return (
    <section id='home' className='hero'>
      <div ref={heroRef} className='hero__container container'>
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
