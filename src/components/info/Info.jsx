import React from 'react';

import SvgIcon from '../svg-icon/SvgIcon';

import './Info.scss';

const Info = ( {icon, info, alt} ) => {
  return (
    <div className="info">
      <SvgIcon 
        className="svg" 
        src={icon} 
        alt={alt} 
      />
      <span>{info}</span>
    </div>
  );
}

export default Info;