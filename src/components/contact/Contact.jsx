import React from 'react';

import ContactForm from '../contact-form/ContactForm';
import Map from '../map/Map';

import './Contact.scss';

const location = {
  lat: 37.3968,
  lng: -122.1069,
}

const Contact = () => {
  return (
    <section className="contact">
      <ContactForm />
      <Map
        location={location} 
        zoomLevel={10}
        text='Uselec Corp.'
      />
    </section>
  );
}

export default Contact;