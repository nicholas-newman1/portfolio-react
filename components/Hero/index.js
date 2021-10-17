import React, { useRef } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import useAnimation from '../../hooks/useAnimation';
import styles from './hero.module.css';
import headshotImage from '../../images/headshot.jpg';

const Hero = () => {
  const heroRef = useRef();
  const rightRef = useRef();

  useAnimation(heroRef, styles.animate);
  useAnimation(rightRef, styles.animate);

  return (
    <section id='home' className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div ref={heroRef} className={`${styles.left} `}>
          <h1 className={styles.heading}>Hi, I'm Nicholas.</h1>
          <p className={styles.text}>Your Future Web Developer</p>
          <div className={styles.social}>
            <SocialLinks />
          </div>
        </div>

        <div ref={rightRef} className={`${styles.right} `}>
          <div className={styles.headshotContainer}>
            <img src={headshotImage} className={styles.headshot} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
