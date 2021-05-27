import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';

import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-title">
        <h1>Contact</h1>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;