import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import ToDo from './to-do';
import CreateToDo from './create-to-do';

import styles from './styles.scss';


class ToDoList extends Component {

  static propTypes = {
    toDoList: PropTypes.array.isRequired,
  }

  render() {
    const { toDoList } = this.props;
    console.log(ToDo)

    return (
      <div className={styles.content}>
        <CreateToDo />
        {
          toDoList.map((toDo) => (
            <ToDo {...toDo}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  toDoList: state.toDoList.list,
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps
)(ToDoList);
