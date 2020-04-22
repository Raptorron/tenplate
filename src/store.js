import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import axios from 'axios';

const GET_USERS = 'GET_USERS';

const userReducer = (state=[], action)=> {
  if(action.type === GET_USERS){
    return action.users
  }
  return state
}

const reducer = combineReducers({
  users: userReducer
});

const store = createStore(reducer, applyMiddleware(thunks));

const getUsers = (users) => ({type: GET_USERS, users});


const getUsersThunk = () => {
  return async (dispatch)=>{
    const response = (await axios.get('/api/users')).data
    dispatch(getUsers(response))
  }
}

export default store;
export {getUsersThunk}
