import { render } from 'react-dom';
import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';


import store, {getUsersThunk, getProductsThunk, getOfferingsThunk, getCompaniesThunk, getChefsThunk, getRecipesThunk, attemptSession} from './redux/store';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Users from './Components/Users';

import Companies from './Components/Companies';
import Products from './Components/Products'

import Best from './Components/Best';
import Recipes from './Components/Recipe';
import Chefs from './Components/Chefs';
import SingleChef from './Components/SingleChef';
import SingleRecipe from './Components/SingleRecipe';

import Login from './Components/Login';
import Loggingin from './Components/Loggingin';

class _App extends Component{
  async componentDidMount(){
    //1//
    this.props.getUsers();
    //2//
    this.props.getProducts();
    this.props.getOfferings();
    this.props.getCompanies();
    //3//
    this.props.getChefs();
    this.props.getRecipes();
    //4//
    this.props.attemptSession();
  }
  render(){
    return (
      <HashRouter>
        <Route path='/' component={Home} exact />
        <Route component={Nav} />
        <Route path='/users' component={Users} />
        <Route path='/products' component={Products} />
        <Route path='/companies' component={Companies} />
        <Route path='/best' component={Best} />
        <Route path='/chefs' component={Chefs} exact />
        <Route path='/recipes' component={Recipes} exact />
        <Route path='/chefs/:id' component={SingleChef} />
        <Route path='/recipes/:id' component={SingleRecipe} />
        {/* {
          loggedIn && (<Route path='/loggingin' component= { Loggingin } exact/>)
        }
        {
          !loggedIn && (<Route path='/login' component= { Login } exact/>)
        }
        {
          loggedIn && <Redirect to='/login' />
        } */}
        <Redirect path='/' exact />
      </HashRouter>
    )
  }
}

const App = connect(({ auth })=> {
  return {
    auth
  };
}, (dispatch)=> {
  return {
    //1//
    getUsers: () => dispatch(getUsersThunk()),
    //2//
    getProducts: () => dispatch(getProductsThunk),
    getOfferings: () => dispatch(getOfferingsThunk),
    getCompanies: () => dispatch(getCompaniesThunk),
    //3//
    getChefs: ()=> dispatch(getChefsThunk()),
    getRecipes: ()=> dispatch(getRecipesThunk()),
    //4//
    attemptSession: ()=> dispatch(attemptSession)
  }
})(_App)

render( <Provider store={store}><App /></Provider>, root);
