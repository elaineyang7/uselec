import React from 'react';

import { benefits } from '../../data/benefits.json';
import Benefit from '../benefit/Benefit';

import './benefits.scss';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__container">
        {benefits.map( (benefit, index) => (
          <Benefit
            key={index}
            image={benefit.image}
            alt={benefit.alt}
            title={benefit.title}
            desc={benefit.desc}
          />
        ))}
      </div>
    </section>
        
  );
}

export default Benefits;