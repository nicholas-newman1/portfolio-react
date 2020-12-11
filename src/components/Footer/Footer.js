import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__logo'>
          <Logo />
        </div>

        <div className='footer__social-links'>
          <SocialLinks />
        </div>

        <div className='footer__nav'>
          <Nav />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
