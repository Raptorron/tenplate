import { render } from 'react-dom';
import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store, {getUsersThunk} from './store';

import Nav from './Nav';
import Home from './Home';
import Users from './Users';

class _App extends Component{
  async componentDidMount(){
    this.props.getUsers();
  }
  render(){
    return (
      <HashRouter>
        <Route path='/' component={Home} exact />
        <Route component={Nav} />
        <Route path='/users' component={Users} />
        <Redirect to='/' />
      </HashRouter>
    )
  }
}

const App = connect(null, (dispatch)=> {
  return {
    getUsers: ()=> dispatch(getUsersThunk())
  }
})(_App)

render( <Provider store={store}><App /></Provider>, root);
