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
  addTodo: (
    title: number,
    description: string,
    priority: number,
    date: string
  ) => void
};

type State = {
  filter: number
}

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
        <h2>Создание задачи</h2>
        <CreateTodo addTodo={this.handleAddTodo} />
        <Select options={priority} onChange={this.handleChangeFilter} />
        {
          todoList.map((todo) => (
            <Todo
              {...todo}
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
