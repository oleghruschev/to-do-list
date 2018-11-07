import Immutable from 'immutable';

import * as actionTypes from 'constants/actionTypes';
import { immutableize } from 'helpers/immutableize';

export const initialState = Immutable.fromJS({
  list: [],
  // openArticle: 0,
});

const toDoList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ARTICLE_SET_CREATE:
      return state.update('list', list => list.push(action.payload));
    
    // case actionTypes.ARTICLE_SET_OPEN:
    //   return state.set('openArticle', action.id)  

    // case actionTypes.ARTICLE_DELETE:
    //   return state.set('list', state.get('list').filter(article => article.get('id') !== action.id));
      

    default: return state;
  }
}

export default immutableize(toDoList);
