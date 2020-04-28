const GET_USERS = 'GET_USERS';
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_OFFERINGS = 'GET_OFFERINGS';
const GET_COMPANIES = 'GET_COMPANIES';

//action creators

//////////////////////////** 1 **//////////////////////////////////
const getUsers = (users) => ({type: GET_USERS, users});

const getProducts = (products) => ({type: GET_PRODUCTS, products});

const getOfferings = (offerings) => ({type: GET_OFFERINGS, offerings});

const getCompanies = (companies) => ({type: GET_COMPANIES, companies})

//////////////////////////** 2 **//////////////////////////////////


export {
  //1//
  GET_USERS,
  getUsers,
  //2//
  GET_PRODUCTS,
  GET_OFFERINGS,
  GET_COMPANIES,
  getProducts,
  getOfferings,
  getCompanies
}
