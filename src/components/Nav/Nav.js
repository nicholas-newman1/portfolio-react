import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const navLinks = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navLinks.map((link) => (
          <li className='nav__item' key={link}>
            <Link to={`${link === 'Home' ? '/' : link}`} className='nav__link'>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
