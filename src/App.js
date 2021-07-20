import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import ScrollToTop from './utils/scrollToTop';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import About from './pages/about/About';
import OrderFlow from './pages/orderflow/OrderFlow';
import ContactPage from './pages/contact/ContactPage';

import './index.css';
import './styles.scss';

class App extends Component {
  render(){
    return(
      <div>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/orderflow" component={OrderFlow} />
            <Route  path="/contact" component={ContactPage} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}
export default App;