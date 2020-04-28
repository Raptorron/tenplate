import { combineReducers } from 'redux';

import {
  //1//
  GET_USERS,
  //2//
  GET_PRODUCTS,
  GET_OFFERINGS,
  GET_COMPANIES

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

const reducer = combineReducers({
  //1//
  users: userReducer,
  //2//
  products: productReducer,
  offerings: offeringReducer,
  companies: companyReducer
});

export { reducer }
