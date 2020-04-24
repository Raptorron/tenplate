import { combineReducers } from 'redux';

import {
  GET_USERS
} from './actions.js';

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


const reducer = combineReducers({
  users: userReducer
});

export { reducer }
