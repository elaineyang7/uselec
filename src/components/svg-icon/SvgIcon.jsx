import React from 'react';

const SvgIcon = ({ src, alt }) => (
  <img 
    src={`/public/images/svg/${src}`} 
    alt={alt} 
  />
);

export default SvgIcon;