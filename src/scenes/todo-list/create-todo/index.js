// @flow
import React, { Component, Fragment } from 'react';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { Input, Button, Select, Textarea } from 'components';

import styles from './styles.scss';

type Props = {
  id? : number,
  edit? : bool,
  date?: number | string,
  title? : string,
  priority? : number,
  description? : string,

  addTodo: Function,
  exitFromTodo?: Function
}

type State = {
  error: bool,
  title: string,
  priority: number,
  description: string,
  date: number | string,
}

class CreateTodo extends Component<Props, State> {

  constructor(props: Props) {
    super();

    this.state = {
      error: false,
      date: props.date ? props.date : '',
      title: props.title ? props.title : '',
      priority: props.priority ? props.priority : USUAL,
      description: props.description ? props.description : '',
    };
  }

  handleChangeTitle = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
  }

  handleChangeDescription = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ description: e.target.value });
  }

  handleChangePriority = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ priority: +e.target.value });
  }

  handleChangeDate = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  }

  handleCreateTodo = () => {
    const { addTodo } = this.props;
    const { title, description, priority, date } = this.state;

    if (title) {
      this.setState({
        date: '',
        title: '',
        error: false,
        description: '',
        priority: USUAL,
      });

      addTodo(title, description, priority, date);
    }

    else {
      this.setState({ error: true });
    }
  }

  handleSaveTodo = () => {
    const { id, addTodo } = this.props;
    const { title, description, priority, date } = this.state;

    addTodo(id, title, description, priority, date);
  }

  handleClearError = () => {
    this.setState({ error: false });
  }

  renderControls() {
    const { edit, exitFromTodo } = this.props;

    if (edit) return (
      <Fragment>
        <Button title='Сохранить' onClick={this.handleSaveTodo} />
        <Button title='Выход' onClick={exitFromTodo} />
      </Fragment>
    );

    else return (
      <Button title='Создать задачу' onClick={this.handleCreateTodo} />
    );
  }

  render() {
    const { error, title, description, date, priority } = this.state;

    const options = [
      { value: USUAL, title: 'Обычная'},
      { value: IMPORTANT, title: 'Важная'},
      { value: VERY_SIGNIFICANT, title: 'Очень важная'},
    ];

    return (
      <div className={styles.wrapper} onMouseLeave={this.handleClearError}>
        <div className={styles.mainBlock}>
          <div className={styles.left}>
            <Input
              value={title}
              placeholder='Что нужно сделать'
              onChange={this.handleChangeTitle}
            />
            <Textarea
              value={description}
              placeholder='Описание'
              onChange={this.handleChangeDescription}
            />
          </div>
          <div className={styles.right}>
            <Input
              type='datetime-local'
              value={date}
              onChange={this.handleChangeDate}
            />
            <Select
              value={priority}
              options={options}
              onChange={this.handleChangePriority}
            />
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
    );
  }
}

export default CreateTodo;
