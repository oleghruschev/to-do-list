// @flow
import React from 'react';

import styles from './styles.scss';

type Props = {
  title: string,

  onClick: Function
}

const Button = (props: Props) => (
  <button className={styles.button} onClick={props.onClick}>
    {props.title}
  </button>
);

export default Button;
