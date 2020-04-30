import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';

import {
  //1//
  getUsersThunk,
  //2//
  getProductsThunk,
  getOfferingsThunk,
  getCompaniesThunk,
  //3//
  getChefsThunk,
  createChefThunk,
  deleteChefThunk,
  updateChefsThunk,
  addChefScoreThunk,
  subChefScoreThunk,
  getRecipesThunk,
  createRecipeThunk,
  deleteRecipeThunk,
  updateRecipesThunk,
  //4//
  attemptSession,
  attemptLogin,
  attemptLogout
} from './thunks.js';
import {
  //1//
  getUsers,
  //2//
  getProducts,
  getOfferings,
  getCompanies,
  //3//
  getChefs,
  createChefs,
  deleteChefs,
  updateChefs,
  getRecipes,
  createRecipes,
  deleteRecipes,
  updateRecipes
} from './actions.js';
import {
  reducer
} from './reducer.js'


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
  getCompaniesThunk,
  //3//
  getChefs,
  getChefsThunk,
  createChefs,
  createChefThunk,
  deleteChefs,
  deleteChefThunk,
  updateChefs,
  updateChefsThunk,
  addChefScoreThunk,
  subChefScoreThunk,
  getRecipes,
  getRecipesThunk,
  createRecipes,
  createRecipeThunk,
  deleteRecipes,
  deleteRecipeThunk,
  updateRecipes,
  updateRecipesThunk,
  attemptSession,
  attemptLogin,
  attemptLogout
}
