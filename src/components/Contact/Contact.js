import React, { useRef } from 'react';
import Email from '../SVGs/Email';
import useAnimation from '../../hooks/useAnimation';
import './contact.css';

const Contact = () => {
  const detailsRef = useRef();
  useAnimation(detailsRef);

  return (
    <section id='contact' className='contact container'>
      <h2 className='section-heading'>Contact</h2>

      <a
        ref={detailsRef}
        className='contact__link'
        href='mailto:nicholas.newman1@hotmail.com'
      >
        <div className='contact__icon'>
          <Email />
        </div>
        nicholas.newman1@hotmail.com
      </a>
    </section>
  );
};

export default Contact;
