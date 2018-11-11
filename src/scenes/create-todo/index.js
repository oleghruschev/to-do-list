// @flow
import React, { Component, Fragment } from 'react';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import Input from 'components/input';
import Button from 'components/button';
import Select from 'components/select';
import Textarea from 'components/textarea';

import styles from './styles.scss';

type Props = {
  id? : number,
  edit? : bool,
  date? : number,
  title? : string,
  priority? : number,
  description? : string,

  addTodo: Function,
  exitFromTodo: Function
}

type State = {
  error: bool,
  title: string,
  priority: number,
  description: title,
  date: number | string,
}

class CreateTodo extends Component<Props, State> {

  constructor({ date, title, priority, description }) {
    super();

    this.state = {
      error: false,
      date: date ? date : '',
      title: title ? title : '',
      priority: priority ? priority : USUAL,
      description: description ? description : '',
    }
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  handleChangePriority = (e) => {
    this.setState({ priority: +e.target.value })
  }

  handleChangeDate = (e) => {
    this.setState({ date: e.target.value })
  }

  handleCreateTodo = () => {
    const { addTodo } = this.props;
    const { title, description, priority, date } = this.state;

    const dateEnd = new Date(date).getTime();

    if (title) {
      this.setState({
        date: '',
        title: '',
        error: false,
        description: '',
        priority: USUAL,
      });

      addTodo(title, description, priority, dateEnd);
    }

    else {
      this.setState({ error: true });
    }
  }

  handleSaveTodo = () => {
    const { id, addTodo } = this.props;
    const { title, description, priority, date, } = this.state;

    addTodo(id, title, description, priority, date)
  }

  handleClearError = () => {
    this.setState({ error: false })
  }

  renderControls() {
    const { edit, addTodo, exitFromTodo } = this.props;

    if (edit) return (
      <Fragment>
        <Button title='Сохранить' onClick={this.handleSaveTodo} />
        <Button title='Выход' onClick={exitFromTodo} />
      </Fragment>
    );

    else return (
      <Button title='Создать задачу' onClick={this.handleCreateTodo} />
    )
  }

  render() {
    const { edit } = this.props;
    const { error, title, description, date, priority } = this.state;

    const options = [
      { value: USUAL, title: 'Обычная', selected: priority === USUAL},
      { value: IMPORTANT, title: 'Важная', selected: priority === IMPORTANT},
      { value: VERY_SIGNIFICANT, title: 'Очень важная', selected: priority === VERY_SIGNIFICANT},
    ]

    return (
      <div className={styles.wrapper} onMouseLeave={this.handleClearError}>
        <div className={styles.mainBlock}>
          <div className={styles.left}>
            <Input
              value={title}
              placeholder='Что нужно сделать'
              onChange={this.handleChangeTitle}
            />
            <div className={styles.description}>
              <Textarea
                value={description}
                placeholder='Описание'
                onChange={this.handleChangeDescription}
              />
            </div>
          </div>
          <div className={styles.right}>
            <Select
              options={options}
              onChange={this.handleChangePriority}
            />
            {
              !edit && (
                <div className={styles.date}>
                  <Input
                    type='datetime-local'
                    value={date}
                    onChange={this.handleChangeDate}
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className={styles.controls}>
          {
            error && (
              <span className={styles.error}>
                Вы не ввели название задачи
              </span>
            )
          }
          {this.renderControls()}
        </div>
      </div>
    )
  }
}

export default CreateTodo
