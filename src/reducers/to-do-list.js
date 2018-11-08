import * as actionTypes from 'constants/actionTypes';

export const initialState = [];

const toDoList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_DO:
      return [
        ...state,
        action.newToDo,
      ];

    case actionTypes.TOGGLE_TO_DO:
      return state.map(toDo =>
        (toDo.id === action.id)
          ? {...toDo, completed: !toDo.completed}
          : toDo
      );

    case actionTypes.DELETE_TODO:
        return state.filter(todo => todo.id !== action.id);

    default: return state;
  }
}

export default toDoList;
