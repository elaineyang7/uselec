import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import ScrollToTop from './utils/scrollToTop';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import About from './pages/about/About';
import OrderFlow from './pages/orderflow/OrderFlow';
import ContactPage from './pages/contact/ContactPage';

import './index.css';

class App extends Component {
  render(){
    return(
      <div>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/orderflow" component={OrderFlow} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}
export default App;