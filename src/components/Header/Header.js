import React, { useState, useEffect, useRef } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './header.css';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const header = useRef();

  useEffect(() => {
    document
      .querySelector('main')
      .addEventListener('click', () => setDisplayNav(false));
  }, []);

  return (
    <header ref={header} className='header'>
      <div className='header__container container'>
        <div className='header__logo'>
          <Logo />
        </div>

        <div
          className='header__hamburger'
          onClick={() => setDisplayNav((prev) => !prev)}
        >
          <Hamburger />
        </div>

        <div
          className={`header__nav${displayNav ? '' : ' header__nav--hidden'}`}
        >
          <Nav setDisplayNav={setDisplayNav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
