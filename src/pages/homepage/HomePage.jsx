import React from 'react';

import Banner from '../../components/banner/Banner';
import HomepageAbout from '../../components/homepage-about/HomepageAbout';
import HomepageOrderFlow from '../../components/homepage-order-flow/HomepageOrderFlow';
import Benefits from '../../components/benefits/Benefits';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <HomepageAbout />
      <HomepageOrderFlow />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;