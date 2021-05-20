import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import OrderFlow from './pages/orderflow/OrderFlow';

import './index.css';

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" component={HomePage} />
          <Route path="/orderflow" component={OrderFlow} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;