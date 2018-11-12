// @flow
import React from 'react';

import styles from './styles.scss';

type Props = {
  type?: string,
  value?: string | number,
  placeholder?: string,

  onChange?: Function
}

const Input = (props: Props) => (
  <input
    type={props.type}
    value={props.value}
    className={styles.input}
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
);

export default Input;
