import React from 'react';

const Button = ({ title, onClick }) => (
  <button onClick={onClick}>
    {title}
  </button>
)

export default Button;
