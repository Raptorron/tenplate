import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';

import {
  getUsersThunk
} from './thunks.js';
import {
  getUsers
} from './actions.js';
import { reducer } from './reducer.js'


const store = createStore(
  reducer,
  applyMiddleware(thunks)
);



export default store;
export {
  getUsers,
  getUsersThunk
}
