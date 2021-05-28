import React from 'react';

import './SubmitButton.scss';

const SubmitButton = ({ onClick }) => (
  <button 
    onClick={onClick}
  >
    Submit
  </button>
);

export default SubmitButton;
