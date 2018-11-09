import * as actionTypes from 'constants/actionTypes';

const setAddTodo = (newTodo) => ({
  type: actionTypes.ADD_TODO,
  newTodo,
});


export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id,
})


export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  id,
})

export const saveTodo = (id, title, description, priority, date) => ({
  type: actionTypes.EDIT_TODO,
  id,
  date,
  title,
  priority,
  description,
});


export const addTodo = (title, description, priority, date) => (dispatch, getState) => {
  const todoList = getState().todoList;
  const id = todoList.length
    ? todoList[todoList.length - 1].id + 1
    : 1
  const newTodo = {
    id,
    date,
    title,
    priority,
    description,
    completed: false,
  }

  dispatch(setAddTodo(newTodo));
};
