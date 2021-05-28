import React from 'react';

import './AboutDescription.scss';

const AboutDescription = ( {desc} ) => {
  return (
    <div className="about-desc">
      <p>{desc}</p>
    </div>
  );
}

export default AboutDescription;