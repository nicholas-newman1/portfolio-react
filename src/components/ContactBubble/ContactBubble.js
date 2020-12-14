import React, { useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import Email from '../SVGs/Email';
import './contactBubble.css';

const ContactBubble = () => {
  const bubbleRef = useRef();

  useEffect(() => {
    bubbleRef.current.classList.add('animate');
  }, []);

  return (
    <HashLink ref={bubbleRef} className='contact-bubble' to='/#contact' smooth>
      <Email />
    </HashLink>
  );
};

export default ContactBubble;
