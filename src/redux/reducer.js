import { combineReducers } from 'redux';

import {
  //1//
  GET_USERS,
  //2//
  GET_PRODUCTS,
  GET_OFFERINGS,
  GET_COMPANIES,
  //3//
  GET_CHEFS,
  CREATE_CHEFS,
  DELETE_CHEFS,
  UPDATE_CHEFS,
  GET_RECIPES,
  CREATE_RECIPES,
  DELETE_RECIPES,
  UPDATE_RECIPES,
  //4//
  SET_AUTH

} from './actions.js';

///////////////////////////** 1 **////////////////////////////////////
const userReducer = (state=[], action)=> {
  if(action.type === GET_USERS){
    return action.users
  }
  return state
}

// const userReducer = (state = [], action) => {
//   switch (action.type){
//     case GET_USERS:
//       return action.orders;
//     default:
//       return state;
//   }
// }
// WORKS TOO

///////////////////////////** 2 **////////////////////////////////////

const productReducer = (state=[], action)=> {
  if(action.type === GET_PRODUCTS){
    return action.products
  }
  return state
}

const offeringReducer = (state=[], action)=> {
  if(action.type === GET_OFFERINGS){
    return action.offerings
  }
  return state
}

const companyReducer = (state=[], action)=> {
  if(action.type === GET_COMPANIES){
    return action.companies
  }
  return state
}

/////////////////////////** 3 **//////////////////////////////////////////

const chefReducer = (state=[], action)=>{
  if(action.type === GET_CHEFS){
    return action.chefs
  }
  if(action.type === CREATE_CHEFS){
    return [...state, action.chef]
  }
  if(action.type === DELETE_CHEFS){
    return state.filter(chef => chef.id !== action.chef.id)
  }
  if(action.type === UPDATE_CHEFS){
    return state.map(chef => chef.id === action.chef.id ? chef : action.chef)
  }
  return state
}

const recipeReducer = (state=[], action)=>{
  if(action.type === GET_RECIPES){
    return action.recipes
  }
  if(action.type === CREATE_RECIPES){
    return [...state, action.recipe]
  }
  if(action.type === DELETE_RECIPES){
    return state.filter(recipe => recipe.id !== action.recipe.id)
  }
  if(action.type === UPDATE_RECIPES){
    return state.map( recipe => recipe.id === action.recipe.id ? recipe : action.recipe)
  }
  return state
}

////////////////////////** 4 **////////////////////////////////////

const authenticateReducer = (state = {}, action) => {
  if(action.type === SET_AUTH){
    return action.auth;
  }
  return state;
}

const reducer = combineReducers({
  //1//
  users: userReducer,
  //2//
  products: productReducer,
  offerings: offeringReducer,
  companies: companyReducer,
  //3//
  chefs: chefReducer,
  recipes: recipeReducer,
  //4//
  auth: authenticateReducer
});

export { reducer }
