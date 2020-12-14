import React, { useRef } from 'react';
import SocialLinks from '../../../components/SocialLinks/SocialLinks';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import './hero.css';

const Hero = () => {
  const hero = useRef();

  useIntersectionObserver(hero);

  return (
    <section ref={hero} id='home' className='hero'>
      <div className='hero__container container'>
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
