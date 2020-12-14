import React from 'react';
import Email from '../../../components/svgs/Email';
import Phone from '../../../components/svgs/Phone';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact container'>
      <h2 className='section-heading'>Contact</h2>

      <form className='contact__form'>
        <label className='contact__label'>
          Name:
          <input className='contact__input' type='text' />
        </label>
        <label className='contact__label'>
          Email:
          <input className='contact__input' type='text' />
        </label>
        <label className='contact__label'>
          Message:
          <textarea className='contact__textarea' />
        </label>
        <button className='contact__submit'>Send</button>
      </form>

      <div className='contact__details'>
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
