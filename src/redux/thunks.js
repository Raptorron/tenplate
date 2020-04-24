import axios from 'axios';

import {
  getUsers
} from './actions.js';

const getUsersThunk = () => {
  return async (dispatch)=>{
    const response = (await axios.get('/api/users')).data
    dispatch(getUsers(response))
  }
}

export {
  getUsersThunk
}
