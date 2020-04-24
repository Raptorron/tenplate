const GET_USERS = 'GET_USERS';


//action creators

const getUsers = (users) => ({type: GET_USERS, users});

export {
  GET_USERS,
  getUsers
}
