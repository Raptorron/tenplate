import axios from 'axios';

import {
  //1//
  getUsers,
  //2//
  getProducts,
  getOfferings,
  getCompanies
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

export {
  //1//
  getUsersThunk,
  //2//
  getProductsThunk,
  getOfferingsThunk,
  getCompaniesThunk
}
