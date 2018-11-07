import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import { createToDo } from 'actions/to-do-list';

import Input from 'components/input';
import Button from 'components/button';
import Select from 'components/select';
import Textarea from 'components/textarea';


class CreateToDo extends Component {

  static propTypes = {
    createToDo: PropTypes.func.isRequired,
  }
  
  state = {
    title: '',
    description: '',
    priority: 0,
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  handleChangePriority = (e) => {
    this.setState({ priority: e.target.value })
  }

  handleCreateToDo = () => {
    const { createToDo } = this.props;
    const { title, description, priority } = this.state;

    createToDo(title, description, priority);
  }

  render() {
    const { title, description } = this.state;
    
    const priority = [
      { value: USUAL, title: 'Обычная'},
      { value: IMPORTANT, title: 'Важная'},
      { value: VERY_SIGNIFICANT, title: 'Очень важная'},
    ]

    return (
      <Fragment>
        <h2>Создание задачи</h2>
        <p>Название</p>
        <Input value={title} onChange={this.handleChange} />
        <p>Описание</p>
        <Textarea value={description} onChange={this.handleChangeDescription}/>
        <p>Дата</p>
        <Input type='date' />
        <Select options={priority} onChange={this.handleChangePriority} />
        <Button title='Создать задачу' onClick={this.handleCreateToDo} />
      </Fragment>  
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
