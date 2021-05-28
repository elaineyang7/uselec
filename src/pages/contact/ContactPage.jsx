import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';

import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;