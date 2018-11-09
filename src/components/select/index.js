import React from 'react';

const Select = ({ options, onChange }) => (
  <select onChange={onChange}>
    {
      options.map(({ value, title, selected }) => (
        <option value={value} selected={selected}>{title}</option>
      ))
    }
  </select>
)

export default Select;
