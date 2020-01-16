import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filmsReducer from './films/filmsReducer';

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  films: filmsReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;