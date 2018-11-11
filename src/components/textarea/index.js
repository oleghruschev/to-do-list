import React from 'react';

import styles from './styles';

const Textarea = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={styles.textarea}
  />
)

export default Textarea;
