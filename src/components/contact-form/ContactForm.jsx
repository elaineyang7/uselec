import React from 'react';

import Input from '../input/Input';
import TextArea from '../textarea/TextArea';
import SubmitButton from '../submit-button/SubmitButton';

import './ContactForm.scss';

const ContactForm = () => {
  

  return (
    <div className="contact__container">
      <form className="contact-form">
        <div className="contact-form__container">
          <h2>Contact Us</h2>
          <Input 
            id="name" 
            name="name" 
            placeholder="Your Name" 
            
          />
          <Input 
            id="email" 
            name="email" 
            placeholder="name@gmail.com" 
            
          />
          <TextArea
            id="message" 
            name="message" 
            placeholder="Your message..." 
            
          />
          <SubmitButton />
        </div>
      </form>
      <div className="contact-info"></div>
    </div>
  );
}

export default ContactForm;