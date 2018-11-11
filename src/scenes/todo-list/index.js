// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { ALL, USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { addTodo } from 'actions/todo-list';

import Select from 'components/select';

import Todo from '../todo';
import CreateTodo from '../create-todo';

import styles from './styles.scss';

type todo = {
  id: number,
  date? : number,
  title? : string,
  priority: number,
  description? : string,
}

type Props = {
  todoList: Array<todo>,

  addTodo: Function
};

type State = { filter: number }


class TodoList extends Component<Props, State> {

  state = { filter: ALL }

  handleAddTodo = (title, description, priority, date) => {
    const { addTodo } = this.props;

    addTodo(title, description, priority, date)
  }

  handleChangeFilter = (e) => {
    this.setState({ filter: + e.target.value });
  }

  render() {
    const { filter } = this.state;
    const { todoList } = this.props;

    const priority = [
      { value: ALL, title: 'Все'},
      { value: USUAL, title: 'Обычные'},
      { value: IMPORTANT, title: 'Важные'},
      { value: VERY_SIGNIFICANT, title: 'Очень важные'},
    ]

    return (
      <div className={styles.content}>
        <h2>Список дел</h2>
        <div className={styles.createTodo}>
          <CreateTodo addTodo={this.handleAddTodo} />
        </div>
        <div className={styles.filter}>
          <span>Фильтр по задачам: </span>
          <Select options={priority} onChange={this.handleChangeFilter} />
        </div>
        {
          todoList.map((todo) => (
            <Todo
              {...todo}
              key={todo.id}
              filter={filter}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
})

const mapDispatchToProps = {
  addTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
