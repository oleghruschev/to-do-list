import * as actionTypes from 'constants/actionTypes';

const setAddToDo = (newToDo) => ({
  type: actionTypes.ADD_TO_DO,
  newToDo,
});


export const toggleToDo = (id) => ({
  type: actionTypes.TOGGLE_TO_DO,
  id,
})


export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  id,
})


// export const setOpenArticle = (id) => ({
//   type: actionTypes.ARTICLE_SET_OPEN,
//   id,
// });


// export const deleteArticle = (id) => ({
//   type: actionTypes.ARTICLE_DELETE,
//   id,
// })


export const createToDo = (title, description, priority, date) => (dispatch, getState) => {
  const toDoList = getState().toDoList;
  const id = toDoList.length
    ? toDoList[toDoList.length - 1].id + 1
    : 1
  const newToDo = {
    id,
    date,
    title,
    priority,
    description,
    completed: false,
  }

  dispatch(setAddToDo(newToDo));
};
