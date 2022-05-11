import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reductors';
import thunk from 'redux-thunk';

declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
