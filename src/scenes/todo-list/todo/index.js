// @flow
import { connect } from 'react-redux';
import classNames from'classnames/bind';
import React, { Component, Fragment } from 'react';

import helpers from 'helpers';
import { ALL, USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { toggleTodo, deleteTodo, saveTodo } from 'actions/todo-list';

import { Checkbox } from 'components';

import CreateTodo from '../create-todo';

import styles from './styles.scss';

const cx = classNames.bind(styles);

type Props = {
  id: number,
  completed: bool,
  title?: string,
  priority: number,
  description?: string,
  date: number | string,

  saveTodo: Function,
  toggleTodo: Function,
  deleteTodo: Function
}

type State = { edit: bool }


class Todo extends Component<Props, State> {

  state = { edit: false }

  handleChangeComplite = () => {
    const { id, toggleTodo } = this.props;

    toggleTodo(id);
  }

  handleEditTodo = () => {
    this.setState({ edit: true });
  }

  handleDeleteTodo = () => {
    const { id, deleteTodo } = this.props;

    deleteTodo(id);
  }

  handleSaveTodo = (id, title, description, priority, date) => {
    const { saveTodo } = this.props;

    this.setState({ edit: false });

    saveTodo(id, title, description, priority, date);
  }

  handleExitFromTodo = () => {
    this.setState({ edit: false });
  }

  render() {
    const { edit } = this.state;
    const { title, description, date, priority, completed } = this.props;

    const currentDate = new Date().getTime();
    const dateEnd = new Date(date).getTime();

    const className = cx(styles.title, {
      overdue: dateEnd < currentDate,
      completed,
    });

    const classNamePriority = cx(styles.priority, {
      green: priority === USUAL,
      yellow: priority === IMPORTANT,
      red: priority === VERY_SIGNIFICANT,
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.complete}>
          <Checkbox
            checked={completed}
            onChange={this.handleChangeComplite}
          />
        </div>
        <div className={styles.todo}>
          {
            edit
              ? (
                <CreateTodo
                  edit
                  {...this.props}
                  addTodo={this.handleSaveTodo}
                  exitFromTodo={this.handleExitFromTodo}
                />
              ) : (
                <Fragment>
                  <div className={styles.header}>
                    <p className={className}>{title}</p>
                    <div className={classNamePriority}/>
                  </div>
                  <div className={styles.dateCompleted}>
                    {
                      completed && (
                        `Выполнена: ${helpers.formateDate(new Date())}`
                      )
                    }
                  </div>
                  <p className={styles.description}>{description}</p>
                  {
                    Boolean(date) && (
                      <p className={styles.date}>
                        {helpers.formateDate(date)}
                      </p>
                    )
                  }
                  <div className={styles.controls}>
                    <span onClick={this.handleEditTodo}>редактировать</span>
                    <span onClick={this.handleDeleteTodo}>удалить</span>
                  </div>
                </Fragment>
              )
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Todo);
