import React from 'react';

import './StepTitle.scss';

const StepTitle = ( {id, title} ) => {
  const step = parseInt(id) + 1
  return (
    <div className="title">
      <h3>{title}</h3>
      <span>{0 + step.toString()}</span>
    </div>
  );
}

export default StepTitle;