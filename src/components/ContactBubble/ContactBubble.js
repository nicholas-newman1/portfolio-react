import React, { useEffect, useRef } from 'react';
import Email from '../SVGs/Email';
import './contactBubble.css';

const ContactBubble = () => {
  const bubbleRef = useRef();

  useEffect(() => {
    bubbleRef.current.classList.add('animate');
  }, []);

  return (
    <a
      ref={bubbleRef}
      className='contact-bubble'
      href='mailto:nicholas.newman1@hotmail.com'
    >
      <Email />
    </a>
  );
};

export default ContactBubble;
