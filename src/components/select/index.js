// @flow
import React from 'react';

import styles from './styles.scss';

type Options = {
  value: number,
  title: string,
  selected?: bool,
}

type Props = {
  options: Array<Options>,

  onChange: Function
}


const Select = (props: Props) => (
  <select
    className={styles.select}
    onChange={props.onChange}
  >
    {
      props.options.map(({ value, title, selected }, index) => (
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
