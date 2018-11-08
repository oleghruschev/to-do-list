import * as actionTypes from 'constants/actionTypes';

const setCreateToDo = (payload) => ({
  type: actionTypes.ARTICLE_SET_CREATE,
  payload,
});


// export const setOpenArticle = (id) => ({
//   type: actionTypes.ARTICLE_SET_OPEN,
//   id,
// });


// export const deleteArticle = (id) => ({
//   type: actionTypes.ARTICLE_DELETE,
//   id,
// })


export const createToDo = (title, description, priority, date) => (dispatch, getState) => {
  const list = getState().toDoList.list;
  const id = list.length
    ? list[list.length - 1].id + 1
    : 1
  const newToDo = {
    id,
    date,
    title,
    priority,
    description,
    completed: false,
  }

  // dispatch(setOpenArticle(id));
  dispatch(setCreateToDo(newToDo));
};


export const toggleCompleted = (id, completed) => (dispatch) => {
  console.log(id, completed)
}
