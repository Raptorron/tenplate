import React from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';

const _Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

const Home = connect()(_Home)

export default Home
