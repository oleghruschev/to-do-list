import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';

import Input from 'components/input';
import Button from 'components/button';
import Select from 'components/select';
import Textarea from 'components/textarea';

import styles from './styles.scss';

class CreateTodo extends Component {

  static propTypes = {
    id: PropTypes.any,
    date: PropTypes.any,
    edit: PropTypes.bool,
    title: PropTypes.any,
    priority: PropTypes.any,
    description: PropTypes.any,

    exitFromTodo: PropTypes.any,
    addTodo: PropTypes.func.isRequired,
  }

  constructor({ date, title, priority, description }) {
    super();

    this.state = {
      date: date ? date : '',
      title: title ? title : '',
      priority: priority ? priority : USUAL,
      description: description ? description : '',
    }
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

  handleCreateTodo = () => {
    const { addTodo } = this.props;
    const { title, description, priority, date } = this.state;

    const dateEnd = new Date(date).getTime();

    addTodo(title, description, priority, dateEnd);
  }

  handleSaveTodo = () => {
    const { id, addTodo } = this.props;
    const { title, description, priority, date, } = this.state;

    addTodo(id, title, description, priority, date)
  }

  renderControls() {
    const { edit, addTodo, exitFromTodo } = this.props;

    if (edit) return (
      <div>
        <Button title='Сохранить' onClick={this.handleSaveTodo} />
        <Button title='Выход' onClick={exitFromTodo} />
      </div>
    );

    else return (
      <div>
        <Button title='Создать задачу' onClick={this.handleCreateTodo} />
      </div>
    )
  }

  render() {
    const { edit } = this.props;
    const { title, description, date, priority } = this.state;

    const options = [
      { value: USUAL, title: 'Обычная', selected: priority === USUAL},
      { value: IMPORTANT, title: 'Важная', selected: priority === IMPORTANT},
      { value: VERY_SIGNIFICANT, title: 'Очень важная', selected: priority === VERY_SIGNIFICANT},
    ]

    return (
      <div className={styles.wrapper}>
        <div>
          <span>Название</span>
          <Input value={title} onChange={this.handleChange} />
        </div>
        <div>
          <span>Описание</span>
          <Textarea value={description} onChange={this.handleChangeDescription}/>
        </div>
        {
          !edit && (
            <div>
              <p>Дата</p>
              <Input type='datetime-local' value={date} onChange={this.handleChangeDate}/>
          </div>
          )
        }
        <Select options={options} onChange={this.handleChangePriority} />
        {this.renderControls()}
      </div>
    )
  }
}

export default CreateTodo
