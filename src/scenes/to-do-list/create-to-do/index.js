import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { createToDo } from 'actions/to-do-list';

import Input from 'components/input';
import Button from 'components/button';
import Select from 'components/select';
import Textarea from 'components/textarea';

import styles from './styles.scss';

class CreateToDo extends Component {

  static propTypes = {
    createToDo: PropTypes.func.isRequired,
  }

  state = {
    date: '',
    title: '',
    priority: 0,
    description: '',
  }

  handleChange = (e) => {
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

  handleCreateToDo = () => {
    const { createToDo } = this.props;
    const { title, description, priority, date } = this.state;

    createToDo(title, description, priority, date);
  }

  render() {
    const { title, description, date } = this.state;

    const priority = [
      { value: USUAL, title: 'Обычная'},
      { value: IMPORTANT, title: 'Важная'},
      { value: VERY_SIGNIFICANT, title: 'Очень важная'},
    ]

    return (
      <div className={styles.wrapper}>
        <h2>Создание задачи</h2>
        <div>
          <span>Название</span>
          <Input value={title} onChange={this.handleChange} />
        </div>
        <div>
          <span>Описание</span>
          <Textarea value={description} onChange={this.handleChangeDescription}/>
        </div>
        <p>Дата</p>
        <Input type='date' value={date} onChange={this.handleChangeDate}/>
        <Select options={priority} onChange={this.handleChangePriority} />
        <div>
          <Button title='Создать задачу' onClick={this.handleCreateToDo} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createToDo,
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(CreateToDo);
