import React from 'react';

const StepDescription = ( {id, desc} ) => {
  const Comment = desc;
  const array = Comment.split('<br />');

  return (
    <div className="description">
        <p>
          {array.map(comment => 
            <React.Fragment
              key={id}
            >
              {comment}<br/>
            </React.Fragment>
          )}
        </p>
    </div>
  );
}

export default StepDescription;