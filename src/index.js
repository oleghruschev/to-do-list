import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './configureStore';

import TodoList from 'scenes/todo-list';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TodoList />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
