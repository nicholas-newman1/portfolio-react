import React, { useRef } from 'react';
import Email from '../SVGs/Email';
import useAnimation from '../../hooks/useAnimation';
import styles from './contact.module.css';

const Contact = () => {
  const detailsRef = useRef();
  useAnimation(detailsRef, styles.animate);

  return (
    <section id='contact' className={`${styles.contact} container`}>
      <h2 className='section-heading'>Contact</h2>

      <a
        ref={detailsRef}
        className={styles.link}
        href='mailto:nicholas.newman1@hotmail.com'
      >
        <div className={styles.icon}>
          <Email />
        </div>
        nicholas.newman1@hotmail.com
      </a>
    </section>
  );
};

export default Contact;
