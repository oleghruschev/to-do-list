import { combineReducers } from 'redux';

import toDoList from './to-do-list';

export const reducers = {
  toDoList,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
