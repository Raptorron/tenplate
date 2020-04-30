const GET_USERS = 'GET_USERS';
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_OFFERINGS = 'GET_OFFERINGS';
const GET_COMPANIES = 'GET_COMPANIES';
const GET_CHEFS = 'GET_CHEFS';
const CREATE_CHEFS = 'CREATE_CHEFS';
const DELETE_CHEFS = 'DELETE_CHEFS';
const UPDATE_CHEFS = 'UPDATE_CHEFS';
const GET_RECIPES = 'GET_RECIPES';
const CREATE_RECIPES = 'CREATE_RECIPES';
const DELETE_RECIPES = 'DELETE_RECIPES';
const UPDATE_RECIPES = 'UPDATE_RECIPES';
const SET_AUTH = 'SET_AUTH';
//action creators

//////////////////////////** 1 **//////////////////////////////////
const getUsers = (users) => ({type: GET_USERS, users});

//////////////////////////** 2 **//////////////////////////////////


const getProducts = (products) => ({type: GET_PRODUCTS, products});

const getOfferings = (offerings) => ({type: GET_OFFERINGS, offerings});

const getCompanies = (companies) => ({type: GET_COMPANIES, companies})

//////////////////////////** 3 **//////////////////////////////////

const getChefs = (chefs) => ({type: GET_CHEFS, chefs});
const createChefs = (chef) => ({type: CREATE_CHEFS, chef});
const deleteChefs = (chef) => ({type: DELETE_CHEFS, chef});
const updateChefs = (chef) => ({type: UPDATE_CHEFS, chef});
const getRecipes = (recipes) => ({type: GET_RECIPES, recipes});
const createRecipes = (recipe) => ({type: CREATE_RECIPES, recipe});
const deleteRecipes = (recipe) => ({type: DELETE_RECIPES, recipe});
const updateRecipes = (recipe) => ({type: UPDATE_RECIPES, recipe});

//////////////////////////** 4 **//////////////////////////////////

const setAuth = (auth) => ({ type: SET_AUTH, auth });
const logOutAuth = () => ({ type: SET_AUTH, auth: {} });
const keepSession = (auth) => ({ type: SET_AUTH, auth });

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
  getCompanies,
  //3//
  GET_CHEFS,
  CREATE_CHEFS,
  DELETE_CHEFS,
  UPDATE_CHEFS,
  getChefs,
  createChefs,
  deleteChefs,
  updateChefs,
  GET_RECIPES,
  CREATE_RECIPES,
  DELETE_RECIPES,
  UPDATE_RECIPES,
  getRecipes,
  createRecipes,
  deleteRecipes,
  updateRecipes,
  //4//
  SET_AUTH,
  setAuth,
  logOutAuth,
  keepSession
}
