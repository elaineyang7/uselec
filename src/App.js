import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import OrderFlow from './pages/orderflow/OrderFlow';
import ContactPage from './pages/contact/ContactPage';

import './index.css';

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/orderflow" component={OrderFlow} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;