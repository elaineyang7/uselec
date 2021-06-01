import React from 'react';

import './TimelineDescription.scss';

const TimelineDescription = ( {desc} ) => {
  return (
    <div className="timeline-desc">
      <p>{desc}</p>
    </div>
  );
}

export default TimelineDescription;