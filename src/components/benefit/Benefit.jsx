import React from 'react';

import './Benefit.scss';

const Benefit = ( {image, alt, title, desc} ) => {
  return (
    <div className="benefit">
      <div className="benefit__imgBox">
        <img 
          src={image} 
          alt={alt}
        />
      </div>
      <div className="benefit__content">
        <h4>{title}</h4>
        <p className="benefit__desc">{desc}</p>
      </div>
    </div>
  );
}

export default Benefit;