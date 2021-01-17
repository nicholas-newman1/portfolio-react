import React, { useRef } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import useAnimation from '../../hooks/useAnimation';
import styles from './hero.module.css';

const Hero = () => {
  const heroRef = useRef();

  useAnimation(heroRef, styles.animate);

  return (
    <section id='home' className={styles.hero}>
      <div ref={heroRef} className={`${styles.container} container`}>
        <h1 className={styles.heading}>Hi, I'm Nicholas.</h1>
        <p className={styles.text}>Your Future Web Developer</p>
        <div className={styles.social}>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
