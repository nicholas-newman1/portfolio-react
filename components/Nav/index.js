import React from 'react';
import styles from './nav.module.css';

const Nav = ({ setDisplayNav }) => {
  const navLinks = ['Home', 'Packages', 'Projects', 'About', 'Contact'];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li className={styles.item} key={link}>
            <a
              className={styles.link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setDisplayNav(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
