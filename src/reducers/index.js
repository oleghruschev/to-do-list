import { combineReducers } from 'redux';

import todoList from './todo-list';

export const reducers = {
  todoList,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
