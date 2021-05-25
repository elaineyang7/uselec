import React from 'react';
import { Link } from 'react-scroll';

import './Step.scss';

const Step = ( {id, step} ) => {
  const Comment = step;
  const array = Comment.split('\t');

  return (
    <Link 
      className="step"
      activeClass="active"
      to={id.toString()}
      spy={true} 
      smooth={true} 
      duration={1000}
      offset={-374}
      key={id}
    >
      {array.map((comment, index) => 
        <React.Fragment
          key={index}
        >
          {comment} &nbsp; 
        </React.Fragment>
      )}
    </Link>
  );
}

export default Step;