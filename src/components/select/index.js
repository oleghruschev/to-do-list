import React from 'react';

const Select = ({ options, onChange }) => (
  <select onChange={onChange}>
    {
      options.map(({ value, title }) => (
        <option value={value}>{title}</option>
      ))
    }
  </select>
)

export default Select;
