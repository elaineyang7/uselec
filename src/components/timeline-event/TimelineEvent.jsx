import React from 'react';

import Time from '../common/time/Time';
import TimelineDescription from '../common/timeline-description/TimelineDescription';

import './TimelineEvent.scss';

const TimelineEvent = ({event}) => {
  return (
    <div className="timeline">
      <span>{event.time}</span>
      <TimelineDescription />
    </div>
  );
}

export default TimelineEvent;