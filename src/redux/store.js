import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';

import {
  //1//
  getUsersThunk,
  //2//
  getProductsThunk,
  getOfferingsThunk,
  getCompaniesThunk
} from './thunks.js';
import {
  //1//
  getUsers,
  //2//
  getProducts,
  getOfferings,
  getCompanies
} from './actions.js';
import { reducer } from './reducer.js'


const store = createStore(
  reducer,
  applyMiddleware(thunks)
);



export default store;
export {
  //1//
  getUsers,
  getUsersThunk,
  //2//
  getProducts,
  getProductsThunk,
  getOfferings,
  getOfferingsThunk,
  getCompanies,
  getCompaniesThunk
}
