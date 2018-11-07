import React from 'react';

import Input from 'components/input';

import styles from './styles.scss';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

const ToDo = ({ id, title, description, priority, date }) => {
  const renderPriority = () => {
    if (priority === USUAL) return 'Обычная'
    if (priority === IMPORTANT) return 'Важная'
    if (priority === VERY_SIGNIFICANT) return 'Очень важная'
  }

  return (
    <div className={styles.todo}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Важность задачи: {renderPriority()}</p>
      <p>Дата выполнения: {date}</p>
      <Input type="checkbox" />
    </div>
  )
}

export default ToDo
