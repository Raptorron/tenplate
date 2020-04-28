import { render } from 'react-dom';
import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';


import store, {getUsersThunk, getProductsThunk, getOfferingsThunk, getCompaniesThunk} from './redux/store';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Users from './Components/Users';

import Companies from './Components/Companies';
import Products from './Components/Products'


class _App extends Component{
  async componentDidMount(){
    //1//
    this.props.getUsers();
    //2//
    this.props.getProducts();
    this.props.getOfferings();
    this.props.getCompanies();
  }
  render(){
    return (
      <HashRouter>
        <Route path='/' component={Home} exact />
        <Route component={Nav} />
        <Route path='/users' component={Users} />
        <Route path='/products' component={Products} />
        <Route path='/companies' component={Companies} />
        <Redirect to='/' />
      </HashRouter>
    )
  }
}

const App = connect(null, (dispatch)=> {
  return {
    getUsers: () => dispatch(getUsersThunk()),
    getProducts: () => dispatch(getProductsThunk),
    getOfferings: () => dispatch(getOfferingsThunk),
    getCompanies: () => dispatch(getCompaniesThunk)
  }
})(_App)

render( <Provider store={store}><App /></Provider>, root);
