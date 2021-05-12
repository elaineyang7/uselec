import React, { Component } from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import HomepageOrderFlow from './components/homepage-order-flow/HomepageOrderFlow';
import Benefit from './components/benefit/Benefit';

import './index.css';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Hero />
        <HomepageOrderFlow />
        <Benefit />
      </div>
    );
  }
}
export default App;