import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { toggleToDo, deleteTodo } from 'actions/to-do-list';

import Input from 'components/input';
import Textarea from 'components/textarea';

import styles from './styles.scss';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';


class ToDo extends Component {

  static propTypes = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,

    toggleToDo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  state = {
    edit: false,
    editTitle: '',
    editDescription: '',
  }

  handleChangeComplite = () => {
    const { id, toggleToDo } = this.props;

    toggleToDo(id)
  }

  handleEditTodo = () => {
    const { title, description } = this.props;

    this.setState({
      edit: true,
      editTitle: title,
      editDescription: description,
    });
  }

  handleDeleteTodo = () => {
    const { id, deleteTodo } = this.props;

    deleteTodo(id)
  }

  handleSaveTodo = () => {
    this.setState({ edit: false })
  }

  handleExitFromTodo = () => {
    this.setState({ edit: false });
  }

  handleChangeTitle = (e) => {
    this.setState({ editTitle: e.targetValue });
  }

  handleChangeDescription = (e) => {
    this.setState({ editDescription: e.target.value });
  }

  renderPriority() {
    const { priority } = this.props;

    if (priority === USUAL) return 'Обычная'
    if (priority === IMPORTANT) return 'Важная'
    if (priority === VERY_SIGNIFICANT) return 'Очень важная'
  }

  render() {
    const { editTitle, editDescription, edit } = this.state;
    const { title, description, date } = this.props;

    if (edit) return (
      <div className={styles.wrapper}>
        <p>Название</p>
        <Input value={editTitle} onChange={this.handleChangeTitle} />
        <p>Описание</p>
        <Textarea value={editDescription} onChange={this.handleChangeDescription}/>
        <p onClick={this.handleSaveTodo}>Сохранить</p>
        <p onClick={this.handleExitFromTodo}>Выход</p>
      </div>
    )
    else return (
      <div className={styles.wrapper}>
        <Input type='checkbox' onChange={this.handleChangeComplite} />
        <div className={styles.todo}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Важность задачи: {this.renderPriority()}</p>
          <p>{date}</p>
          <p onClick={this.handleEditTodo}>ред.</p>
          <p onClick={this.handleDeleteTodo}>удалить</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  toggleToDo,
  deleteTodo,
}

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ToDo)
