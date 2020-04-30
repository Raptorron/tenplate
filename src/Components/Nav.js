import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const _Nav = ({users, products, companies, offerings, chefs, recipes}) => {
  return (
    <nav>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/users'>Users (1)</NavLink>
      <NavLink to='/products'>Products (2)</NavLink>
      <NavLink to='/companies'>Companies (2)</NavLink>
      <NavLink to='/best'>Top Chef (3)</NavLink>
      <NavLink to='/chefs'>Chef Page (3)</NavLink>
      <NavLink to='/recipes'>Recipe Page (3)</NavLink>
      <NavLink to='/login'>Login Page (4)</NavLink>
    </nav>
  )
}

const Nav = connect(({users, products, companies, offerings, chefs, recipes}) => {
  return {
    users,
    products,
    companies,
    offerings,
    chefs,
    recipes
  }
})(_Nav)

export default Nav
