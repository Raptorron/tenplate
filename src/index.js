import { render } from 'react-dom';
import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import store, {getUsersThunk} from './redux/store';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Users from './Components/Users';

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
