import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

export const store = createStore(persistedReducer, initialState, enhancers);
export const persistor = persistStore(store);
