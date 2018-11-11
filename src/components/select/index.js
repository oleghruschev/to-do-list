import React from 'react';

import styles from './styles.scss';

const Select = ({ options, onChange }) => (
  <select
    className={styles.select}
    onChange={onChange}
  >
    {
      options.map(({ value, title, selected }, index) => (
        <option
          key={index}
          value={value}
          selected={selected}
        >
          {title}
        </option>
      ))
    }
  </select>
)

export default Select;
