// @flow
import React from 'react';

import styles from './styles';

type Props = {
  value: string,
  placeholder: string,

  onChange: Function,
}


const Textarea = (props: Props) => (
  <textarea
    value={props.value}
    onChange={props.onChange}
    className={styles.textarea}
    placeholder={props.placeholder}
  />
)

export default Textarea;
