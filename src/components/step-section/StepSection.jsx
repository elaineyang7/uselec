import React from 'react';

import StepTitle from '../step-title/StepTitle';
import StepDescription from '../step-description/StepDescription';

import './StepSection.scss';

const StepSection = ( {id, step} ) => {
  return (
    <section>
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