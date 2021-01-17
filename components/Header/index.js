import React, { useState, useEffect, useRef } from 'react';
import Hamburger from '../Hamburger';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './header.module.css';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    document
      .querySelector('main')
      .addEventListener('click', () => setDisplayNav(false));

    headerRef.current.classList.add(styles.animate);
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setDisplayNav((prev) => !prev)}
        >
          <Hamburger />
        </div>

        <div
          className={`${styles.nav} ${displayNav ? '' : styles.nav__hidden}`}
        >
          <Nav setDisplayNav={setDisplayNav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
