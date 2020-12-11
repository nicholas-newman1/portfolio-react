import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './header.css';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <header className='header'>
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
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
