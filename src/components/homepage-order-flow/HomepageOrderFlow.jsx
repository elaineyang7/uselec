import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { steps } from '../../data/order-flow.json';
import OrderFlowCard from '../order-flow-card/OrderFlowCard';

import './HomepageOrderFlow.scss';

const HomepageOrderFlow = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -374; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <section className="order-flow">
      <h2>Order Flow</h2>
      <div className="order-flow__container">
        
        {steps.map( (step, index) => (
          <HashLink to={`/orderflow/#${index}`} scroll={el => scrollWithOffset(el)}>
            <OrderFlowCard 
              key={index}
              id={step.id}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
            />
          </HashLink>
        ))}
      </div>
    </section>
  );
}

export default HomepageOrderFlow;