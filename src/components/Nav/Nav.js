import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './nav.css';

const Nav = ({ setDisplayNav }) => {
  const navLinks = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navLinks.map((link) => (
          <li className='nav__item' key={link}>
            <HashLink
              className='nav__link'
              to={`/#${link.toLowerCase()}`}
              smooth
              onClick={() => setDisplayNav(false)}
            >
              {link}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
