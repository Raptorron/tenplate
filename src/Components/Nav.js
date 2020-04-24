import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const _Nav = ({users}) => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </nav>
  )
}

const Nav = connect(({users}) => {
  return {
    users
  }
})(_Nav)

export default Nav
