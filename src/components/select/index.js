// @flow
import React from 'react';

import styles from './styles.scss';

type Options = {
  value: number,
  title: string
}

type Props = {
  value: number,
  options: Array<Options>,

  onChange: Function
}


const Select = (props: Props) => (
  <select
    value={props.value}
    className={styles.select}
    onChange={props.onChange}
  >
    {
      props.options.map(({ value, title }, index) => (
        <option
          key={index}
          value={value}
        >
          {title}
        </option>
      ))
    }
  </select>
);

export default Select;
