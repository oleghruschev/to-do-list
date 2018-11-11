import React from 'react';

import styles from './styles.scss';

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={styles.input}
    placeholder={placeholder}
  />
)

export default Input;
