import React, { Component } from 'react';
import { Link } from 'react-scroll';

import { steps } from '../../data/order-flow-details.json';
import SvgIcon from '../../components/svg-icon/SvgIcon';
import StepSection from '../../components/step-section/StepSection';

import './OrderFlow.scss';

class OrderFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listIndex: "0",
      position: "relative",
      top: "5%"
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 550) {
        this.setState({ 
          position: "fixed",
          top: "20%"
        });
      } else {
        this.setState({ 
          position: "relative",
          top: "5%"
        })
      }
    });
  }

  handleClick(props) {
    this.setState ({
      listIndex: props
    })
  }

  render() {
    return (
      <section className="orderflow">
        <div className="intro__container">
          <span>Order Flow</span>
          <h1>採購流程</h1>
          <div className="introduction">
            <p>回覆迅速/採購流程簡易</p>
            <p>快速供貨/根據需求時間出貨</p>
            <p>提供專業採購服務</p>
          </div>
          <div className="icon">
            <SvgIcon 
              src="microchip.svg"
              alt="electronic parts"
            />
          </div>
        </div>
        <div className="orderflow__container">
          <aside 
            className="steps"
            style={{ 
              position: this.state.position,
              top: this.state.top,
            }}
          >
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
                    offset={-130}
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
                    offset={-130}
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
                    offset={-130}
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
                    offset={-130}
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
      </section>
    );
  }
}

export default OrderFlow;