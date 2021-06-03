import React from 'react';

import './SubmitButton.scss';

const SubmitButton = ({ onClick }) => (
  <button 
    className="submit-button"
    onClick={onClick}
  >
    Submit
  </button>
);

export default SubmitButton;
