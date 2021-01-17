import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.social_links}>
          <SocialLinks />
        </div>

        <div className={styles.nav}>
          <Nav />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
