import React from 'react';

import Hero from '../../components/hero/Hero';
import HomepageOrderFlow from '../../components/homepage-order-flow/HomepageOrderFlow';
import Benefits from '../../components/benefits/Benefits';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <HomepageOrderFlow />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;