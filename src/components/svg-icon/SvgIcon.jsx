import React from 'react';

const SvgIcon = ({ src, alt }) => (
  <img 
    src={`./assets/svg/${src}`} 
    alt={alt} 
  />
);

export default SvgIcon;