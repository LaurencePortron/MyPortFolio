import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return (
    <div className='contact-container'>
      <div className='contact-title '>Reach out!</div>
      <div className='contact-text'>
        <p className='final-text'>
          {' '}
          Sure look..
          <br /> I may not be the most experienced web developer but <br />
          surely I am super eager to start my first mission!
        </p>

        <br />
        <br />
        <p className='email-text'>So what are you waiting for.. ?</p>
        <p>Contact me at portron.laurence@gmail.com</p>
      </div>
    </div>
  );
}
