import React from 'react';

import './TextArea.scss';

const TextArea = ( {id, name, placeholder, onChange} ) => {
  return (
    <div className="input-box">
      <label 
        type="text"
        name={name}
        id={id}
      >
        {name}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;