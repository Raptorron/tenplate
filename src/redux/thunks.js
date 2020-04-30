import axios from 'axios';

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
  updateRecipes,
  //4//
  keepSession,//get route
  logOutAuth,//delete route
  setAuth// post route
} from './actions.js';

//////////////////////////** 1 **////////////////////////////////////////
const getUsersThunk = () => {
  return async (dispatch)=>{
    const response = (await axios.get('/api/users')).data
    dispatch(getUsers(response))

  }
}

/////////////////////////////** 2 **/////////////////////////////////////////

const getProductsThunk = () => {
  return async (dispatch)=>{
    const response = (await axios.get('/api/products')).data
    dispatch(getProducts(response))
  }
}

const getOfferingsThunk = () => {
  return async (dispatch)=>{
    const response = (await axios.get('/api/offerings')).data
    dispatch(getOfferings(response))
  }
}

const getCompaniesThunk = () => {
  return async (dispatch)=>{
    const response = (await axios.get('/api/companies')).data
    dispatch(getCompanies(response))
  }
}

//////////////////////////** 3 **///////////////////////////////////////

//Chef Thunks
const getChefsThunk = ()=>{
  return async (dispatch)=>{
    const response = (await axios.get('/api/chefs')).data
    dispatch(getChefs(response))
  }
}
const createChefThunk = (chef)=>{

  return async (dispatch)=>{
    const response = (await axios.post('/api/chefs', chef)).data
    dispatch(createChefs(response))
  }
}
const deleteChefThunk = (chef)=>{
  return async (dispatch)=>{
    await axios.delete(`/api/chefs/${chef.id}`);
    dispatch(deleteChefs(chef))
  }
}
const updateChefsThunk = (chef)=>{
  return async (dispatch)=>{
    const response = (await axios.update(`/api/chefs/${chef.id}`)).data
    dispatch(updateChefs(response))
  }
}
const addChefScoreThunk = (chef) => {
  console.log('store', chef)
  return async dispatch =>{
    const updated = (await axios.put(`/api/chefs/${chef.id}`, {...chef, chefScore: chef.chefScore + 1 })).data
    dispatch(updateChef(updated))
  }
};
const subChefScoreThunk = (chef) => {
  return async dispatch =>{
    const updated = (await axios.put(`/api/chefs/${chef.id}`, {...chef, chefScore: chef.chefScore - 1 })).data
    dispatch(updateChef(updated))
  }
};

//Recipes Thunks
const getRecipesThunk = ()=>{
  return async (dispatch)=>{
    const response = (await axios.get('/api/recipes')).data
    dispatch(getRecipes(response))
  }
}
const createRecipeThunk = (recipe)=>{
  return async (dispatch)=>{
    const response = (await axios.post('/api/recipes', recipe)).data
    dispatch(createRecipes(response))
  }
}
const deleteRecipeThunk = (recipe)=>{
  return async (dispatch)=>{
    await axios.delete(`/api/recipes/${recipe.id}`)
    dispatch(deleteRecipes(recipe))
  }
}
const updateRecipesThunk = (recipe)=>{
  return async (dispatch)=>{
    const response = (await axios.update(`/api/recipes/${recipe.id}`)).data
    dispatch(updateRecipes(response))
  }
}

//////////////////////////** 4 **///////////////////////////////////////

const attemptSession = () => {
  return async dispatch => {
    const auth = (await axios.get('/api/session')).data;
    dispatch(keepSession(auth));
  };
};

const attemptLogout = () => {
  return async dispatch => {
    await axios.delete('/api/logout');
    dispatch(logOutAuth())
  }
}

const attemptLogin = (user) => {
  return async dispatch => {
    const auth = (await axios.post('/api/login', {
      email: user.email,
      password: user.password
    })).data;
    dispatch(setAuth(auth));
  };
};
export {
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
}
