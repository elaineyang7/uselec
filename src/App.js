import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import OrderFlow from './pages/orderflow/OrderFlow1';

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;