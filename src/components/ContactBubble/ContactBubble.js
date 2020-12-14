import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Email from '../SVGs/Email';
import './contactBubble.css';

const ContactBubble = () => {
  return (
    <HashLink className='contact-bubble' to='/#contact' smooth>
      <Email />
    </HashLink>
  );
};

export default ContactBubble;
