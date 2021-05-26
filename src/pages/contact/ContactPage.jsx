import React from 'react';

import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-title">
        <h1>Contact</h1>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;