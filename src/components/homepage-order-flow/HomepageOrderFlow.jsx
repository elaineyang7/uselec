import React from 'react';
import { Link } from 'react-router-dom';

import { steps } from '../../data/order-flow.json';
import OrderFlowCard from '../order-flow-card/OrderFlowCard';

import './HomepageOrderFlow.scss';

const HomepageOrderFlow = () => {
  return (
    <section className="order-flow">
      <h2>Order Flow</h2>
      <div className="order-flow__container">
        
        {steps.map( (step, index) => (
          <Link to='/orderflow'>
            <OrderFlowCard 
              key={index}
              id={step.id}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomepageOrderFlow;