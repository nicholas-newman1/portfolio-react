import React, { useEffect, useRef } from 'react';
import Email from '../SVGs/Email';
import styles from './contactBubble.module.css';

const ContactBubble = () => {
  const bubbleRef = useRef();

  useEffect(() => {
    bubbleRef.current.classList.add('animate');
  }, []);

  return (
    <a
      ref={bubbleRef}
      className={styles.contact_bubble}
      href='mailto:nicholas.newman1@hotmail.com'
    >
      <Email />
    </a>
  );
};

export default ContactBubble;
