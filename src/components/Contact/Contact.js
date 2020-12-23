import React, { useRef } from 'react';
import Email from '../SVGs/Email';
import Phone from '../SVGs/Phone';
import useAnimation from '../../hooks/useAnimation';
import './contact.css';

const Contact = () => {
  const detailsRef = useRef();
  useAnimation(detailsRef);

  return (
    <section id='contact' className='contact container'>
      <h2 className='section-heading'>Contact</h2>

      <div ref={detailsRef} className='contact__details'>
        <a className='contact__link' href='mailto:nicholas.newman1@hotmail.com'>
          <div className='contact__icon'>
            <Email />
          </div>
          nicholas.newman1@hotmail.com
        </a>
        <a className='contact__link' href='tel:6479928126'>
          <div className='contact__icon'>
            <Phone />
          </div>
          (647)-992-8126
        </a>
      </div>
    </section>
  );
};

export default Contact;
