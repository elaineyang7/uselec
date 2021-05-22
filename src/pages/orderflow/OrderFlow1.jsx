import React, { Component } from 'react';

import { steps } from '../../data/order-flow-details.json';
import StepSection from '../../components/step-section/StepSection';
import Step from '../../components/step/Step';

import './OrderFlow1.scss';

class OrderFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listIndex: 0,
      content: steps[0]
    };
  }

  handleClick(props) {
    this.setState ({
      listIndex: props,
      content: steps[props]
    })
  }

  render() {
    return (
      <div className="orderflow">
        <h1>Order Flow</h1>
        <aside className="steps">
        <div className="steps__container">
          <div className="indicator">
            <div className="indicator__progress"></div>
          </div>
          <ul>
            {steps.map( (step, index) => (
              <li
                key={index}
                onClick={() => this.handleClick(index)}
                className={`${index === this.state.listIndex ? 'active' : ''}`}
              >
                <Step
                  id={index}
                  step={step.step}
                />
              </li>
            ))}
          </ul>
        </div>
        </aside>
        <div className="flow">
          <StepSection 
            key={this.state.listIndex}
            id={this.state.listIndex}
            step={this.state.content}
          />
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