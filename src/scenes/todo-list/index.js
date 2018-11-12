// @flow
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { ALL, USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { addTodo } from 'actions/todo-list';

import { Select } from 'components';

import Todo from './todo';
import CreateTodo from './create-todo';

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

    addTodo(title, description, priority, date);
  }

  handleChangeFilter = (e: SyntheticInputEvent<>) => {
    this.setState({ filter: + e.target.value });
  }

  render() {
    const { filter } = this.state;
    const { todoList } = this.props;

    const options = [
      { value: ALL, title: 'Все'},
      { value: USUAL, title: 'Обычные'},
      { value: IMPORTANT, title: 'Важные'},
      { value: VERY_SIGNIFICANT, title: 'Очень важные'},
    ];

    const filterTodoList = filter === ALL
      ? todoList
      : todoList.filter(todo => (
        todo.priority === filter
      ));

    return (
      <div className={styles.content}>
        <h2>Список дел</h2>
        <div className={styles.createTodo}>
          <CreateTodo addTodo={this.handleAddTodo} />
        </div>
        {
          todoList.length > 0 && (
            <Fragment> 
              <div className={styles.filter}>
                <span>Фильтр по задачам: </span>
                <div className={styles.select}>
                  <Select
                    value={filter}
                    options={options}
                    onChange={this.handleChangeFilter}
                  />
                </div>
              </div>
              {
                filterTodoList.length
                  ? filterTodoList.map((todo) => (
                    <Todo
                      {...todo}
                      key={todo.id}
                    />
                  ))
                  : <div className={styles.noTodo}>Задачи не найдены</div>
              }
            </Fragment>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
