import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { ALL, USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { toggleTodo, deleteTodo, saveTodo } from 'actions/todo-list';

import Input from 'components/input';
import Textarea from 'components/textarea';

import CreateTodo from '../create-todo';

import styles from './styles.scss';


class Todo extends Component {

  static propTypes = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    filter: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,

    saveTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  state = { edit: false }

  handleChangeComplite = () => {
    const { id, toggleTodo } = this.props;

    toggleTodo(id)
  }

  handleEditTodo = () => {
    const { title, description } = this.props;

    this.setState({ edit: true });
  }

  handleDeleteTodo = () => {
    const { id, deleteTodo } = this.props;

    deleteTodo(id)
  }

  handleSaveTodo = (id, title, description, priority, date) => {
    const { saveTodo } = this.props;

    this.setState({ edit: false })

    saveTodo(id, title, description, priority, date)
  }

  handleExitFromTodo = () => {
    this.setState({ edit: false });
  }

  renderPriority() {
    const { priority } = this.props;

    if (priority === USUAL) return 'Обычная'
    if (priority === IMPORTANT) return 'Важная'
    if (priority === VERY_SIGNIFICANT) return 'Очень важная'
  }

  render() {
    const { edit } = this.state;
    const { title, description, date, priority, filter } = this.props;
    
    const dateEnd = new Date(date);
    const day = dateEnd.getDate();
    const hours = dateEnd.getHours();
    const month = dateEnd.getMonth() + 1;
    const minutes = dateEnd.getMinutes();
    const year = dateEnd.getFullYear();

    const formatMonth = month < 10 ? `0${month}` : month;
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;

    if (filter !== 0 && filter !== priority) return null;

    else if (edit) return (
      <CreateTodo
        edit
        {...this.props}
        addTodo={this.handleSaveTodo}
        exitFromTodo={this.handleExitFromTodo}
      />
    )

    else return (
      <div className={styles.wrapper}>
        <Input type='checkbox' onChange={this.handleChangeComplite} />
        <div className={styles.todo}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Важность задачи: {this.renderPriority()}</p>
          {
            Boolean(date) && (
              <p>{day}.{formatMonth}.{year} {hours}:{formatMinutes}</p>
            )
          }
          <p onClick={this.handleEditTodo}>ред.</p>
          <p onClick={this.handleDeleteTodo}>удалить</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  saveTodo,
  toggleTodo,
  deleteTodo,
}

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Todo)
