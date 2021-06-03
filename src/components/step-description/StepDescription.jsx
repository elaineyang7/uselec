import React from 'react';

const StepDescription = ( {id, desc} ) => {
  const Comment = desc;
  const array = Comment.split('<br />');

  return (
    <div className="description">
        <p key={id}>
          {array.map((comment, index) => 
            <React.Fragment
              key={index}
            >
              {comment}<br/>
            </React.Fragment>
          )}
        </p>
    </div>
  );
}

export default StepDescription;