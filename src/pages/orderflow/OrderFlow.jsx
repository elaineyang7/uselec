import React, { Component } from 'react';
import { Link } from 'react-scroll';

import { steps } from '../../data/order-flow-details.json';
import StepSection from '../../components/step-section/StepSection';
import Step from '../../components/step/Step';

import './OrderFlow.scss';

class OrderFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listIndex: "0"
    };
  }

  handleClick(props) {
    this.setState ({
      listIndex: props
    })
  }

  render() {
    return (
      <div className="orderflow">
        <div className="page-title">
          <h1>Order Flow</h1>
        </div>
        <aside className="steps">
        <div className="steps__container">
          <div className="indicator">
            <div className="indicator__progress"></div>
          </div>
          <ul>
            <li>
              <Link 
                className="step"
                to={"0"}
                spy={true} 
                smooth={true} 
                duration={1000}
                offset={-374}
              >
                01 &nbsp; Request
              </Link>
            </li>
            <li>
              <Link 
                className="step"
                to={"1"}
                spy={true} 
                smooth={true} 
                duration={1000}
                offset={-374}
              >
                02 &nbsp; Contract
              </Link>
            </li>
            <li>
              <Link 
                className="step"
                to={"2"}
                spy={true} 
                smooth={true} 
                duration={1000}
                offset={-374}
              >
                03 &nbsp; Shipping
              </Link>
            </li>
            <li>
              <Link 
                className="step"
                to={"3"}
                spy={true} 
                smooth={true} 
                duration={1000}
                offset={-374}
              >
                04 &nbsp; Receive
              </Link>
            </li>
          </ul>
        </div>
        </aside>
        <div className="flow">
          {steps.map( (step, index) => (
            <StepSection 
              key={index}
              id={index}
              step={step}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OrderFlow;