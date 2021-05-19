import React from 'react';

import './Input.scss';

const Input = ( {id, name, placeholder, onChange} ) => {
  return (
    <div className="input-box">
      <label 
        type="text"
        name={name}
        id={id}
      >
        {name}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;