import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer';

import './ContactPage.scss';

const location = {
  lat: 37.3968,
  lng: -122.1069,
}

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <Map
        location={location} 
        zoomLevel={10}
        text='Uselec Corp.'
      />
      <Footer />
    </div>
  );
}

export default ContactPage;