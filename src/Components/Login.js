import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import {attemptLogin} from '../redux/store';

class _Login extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }
  attemptLogin(ev){
    ev.preventDefault();
    const credentials = {...this.state};
    delete credentials.error;
    this.props.attemptLogin(credentials)
      .catch(ex => this.setState({ error: 'bad credentials'}));
  }
  onChange(ev){
    this.setState({[ev.target.name]: ev.target.value });
  }
  render(){
    const { error, email, password } = this.state;
    const { onChange, attemptLogin } = this;
    return (
        <form>
          {
            error && <div className='error'>{ error }</div>
          }
          <div>
            <label>Email</label>
            <input name='email' value={ email } onChange={ onChange } />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' value={ password } onChange={ onChange } />
          </div>
          <button onClick={ attemptLogin }>Login</button>
        </form>
    );
  }
}

const Login = connect(
  ()=> {
    return {

    };
  },
  (dispatch)=> {
    return {
      attemptLogin: (user)=> dispatch(attemptLogin(user))
    }
  }
)(_Login);

export default Login
