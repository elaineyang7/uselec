import React from 'react';

import './Input.scss';

const Input = ( {id, name, placeholder, className, onChange, onBlur, error} ) => {
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
      <input
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur} 
      />
    </div>
  );
}

export default Input;