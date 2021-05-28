import React from 'react';

import StepTitle from '../common/step-title/StepTitle';
import StepDescription from '../common/step-description/StepDescription';

import './StepSection.scss';

const StepSection = ( {id, step} ) => {
  return (
    <section id={id}>
      <StepTitle
        id={id}
        title={step.title}
      />

      <StepDescription
        id={id}
        desc={step.desc}
      />
    </section>
  );
}

export default StepSection;