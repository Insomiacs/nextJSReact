// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './redux/reducers';

const exampleInitialState = {};

export function initializeStore(initialState: Object = exampleInitialState): Object {
  return createStore<Function, Object, Object>(
    rootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
