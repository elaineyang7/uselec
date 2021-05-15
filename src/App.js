import React, { Component } from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import HomepageOrderFlow from './components/homepage-order-flow/HomepageOrderFlow';
import Benefits from './components/benefits/Benefits';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './index.css';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Hero />
        <HomepageOrderFlow />
        <Benefits />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;