import * as actionTypes from 'constants/actionTypes';

export const setCreateToDo = (payload) => ({
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
  

export const createToDo = (title, description, priority) => (dispatch, getState) => {
  console.log(title, description)
  const list = getState().toDoList.list;
  const id = list.length
    ? list[list.length - 1].id + 1
    : 1
  const newToDo = {
    id,
    title,
    description,
    priority,
  }
  console.log(newToDo)

  // dispatch(setOpenArticle(id));
  dispatch(setCreateToDo(newToDo));
};
