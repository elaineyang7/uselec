import React from 'react';

import './TextArea.scss';

const TextArea = ( {id, name, placeholder, className, onChange, onBlur, error} ) => {
  return (
    <div className={`input-box ${className}`}>
      <label 
        type="text"
        name={name}
        id={id}
      >
        {name}
        <p>{error}</p>
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default TextArea;