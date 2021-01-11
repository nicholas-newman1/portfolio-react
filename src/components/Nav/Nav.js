import React from 'react';
import './nav.css';

const Nav = ({ setDisplayNav }) => {
  const navLinks = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navLinks.map((link) => (
          <li className='nav__item' key={link}>
            <a
              className='nav__link'
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
