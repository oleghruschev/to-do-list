import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { toggleCompleted } from 'actions/to-do-list';

import Input from 'components/input';

import styles from './styles.scss';

import { USUAL, IMPORTANT, VERY_SIGNIFICANT } from 'constants/priority';


class ToDo extends Component {

  static propTypes = {
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired,
    priority: PropTypes.number.isRequired,

    toggleCompleted: PropTypes.func.isRequired,
  }

  handleChangeComplite = () => {
    const { id, completed, toggleCompleted } = this.props;

    toggleCompleted(id, !completed)
  }

  renderPriority() {
    const { priority } = this.props;

    if (priority === USUAL) return 'Обычная'
    if (priority === IMPORTANT) return 'Важная'
    if (priority === VERY_SIGNIFICANT) return 'Очень важная'
  }

  render() {
    const { title, description, date } = this.props;
    
    return (
      <div className={styles.wrapper}>
        <Input type='checkbox' onChange={this.handleChangeComplite} />
        <div className={styles.todo}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Важность задачи: {this.renderPriority()}</p>
          <p>{date}</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  toggleCompleted,
}

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ToDo)
