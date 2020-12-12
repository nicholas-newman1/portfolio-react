import React from 'react';
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
    </section>
  );
};

export default Contact;
