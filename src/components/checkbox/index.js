// @flow
import React from 'react';

import styles from './styles.scss';

type Props = {
  checked: bool,

  onChange: Function,
}


const Checkbox = (props: Props) => (
  <input
    type='checkbox'
    checked={props.checked}
    onChange={props.onChange}
    className={styles.checkbox}
  />
);

export default Checkbox;
