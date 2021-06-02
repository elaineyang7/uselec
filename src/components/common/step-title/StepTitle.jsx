import React from 'react';

import './StepTitle.scss';

const StepTitle = ( {id, title} ) => {
  const step = parseInt(id) + 1
  return (
    <div className="title">
      <span>{0 + step.toString()}</span>
      <h3>{title}</h3>
    </div>
  );
}

export default StepTitle;