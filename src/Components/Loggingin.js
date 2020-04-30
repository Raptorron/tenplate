import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import {attemptLogout} from '../redux/store';

const _Loggingin = ({ auth, attemptLogout })=> <div>
  Home - Welcome { auth.email }
  <button onClick={ attemptLogout }>Logout</button>
</div>;

const Loggingin = connect(
    ({ auth })=> {
      return { auth }
    },
    (dispatch)=> {
      return {
        attemptLogout: ()=> dispatch(attemptLogout())
      }
    }
)(_Loggingin);

export default Loggingin;
