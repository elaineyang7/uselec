import React from 'react';

const Input = ( {id, name, placeholder, onChange} ) => {
  return (
    <div className="input-box">
      <label 
        type="text" 
        name="{name}" 
        id="{name}">
        {name}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        id="{name}"
      />
    </div>
  );
}

export default Input;