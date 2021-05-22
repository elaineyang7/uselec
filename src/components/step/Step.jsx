import React from 'react';

import './Step.scss';

const Step = ( {id, step} ) => {
  const Comment = step;
  const array = Comment.split('\t');
  return (
    <span 
      className="step"
    >
      {array.map(comment => 
        <React.Fragment
          key={id}
        >
          {comment} &nbsp; 
        </React.Fragment>
      )}
    </span>
  );
}

export default Step;