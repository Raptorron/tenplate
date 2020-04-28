import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const _Nav = ({users, products, companies, offerings}) => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>Users (1)</NavLink>
      <NavLink to='/products'>Products (2)</NavLink>
      <NavLink to='/companies'>Companies (2)</NavLink>
    </nav>
  )
}

const Nav = connect(({users, products, companies, offerings}) => {
  return {
    users,
    products,
    companies,
    offerings
  }
})(_Nav)

export default Nav
