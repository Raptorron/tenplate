import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';

const _Users = ({users}) => {
  return (
    <div>
      <ul>
        {
          users.map( user => <li key={user.id}>
            {user.name}
          </li>)
        }
      </ul>
    </div>
  )
}

const Users = connect(({users})=>{
  return {
    users
  }
})(_Users)

export default Users
