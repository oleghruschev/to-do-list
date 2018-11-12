import * as actionTypes from 'constants/actionTypes';

export const initialState = [];

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        action.newTodo,
      ];

    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );

    case actionTypes.EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {
            ...todo,
            date: action.date,
            title: action.title,
            priority: action.priority,
            description: action.description,
          }
          : todo
      );

    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default: return state;
  }
};

export default todoList;
