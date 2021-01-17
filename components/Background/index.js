import React from 'react';
import src from '../../images/background.jpg';
import styles from './background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      <img className={styles.image} src={src} alt='background' />
    </div>
  );
};

export default Background;
