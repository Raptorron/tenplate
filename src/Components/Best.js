import React from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';

const _Best = ({ chefs, recipes })=> {
  const topChef = chefs.reduce((a,b)=> a.chefScore > b.chefScore ? a : b, []);

  const healthyRecipes = recipes.filter(recipe => {
    if(recipe.healthScore >=8 && recipe.healthScore <= 10){
      return recipe
    }
  })

  return (
    <div>
      <h1>TOP CHEF</h1>
      <p>The highest rated <Link to='/users' >chef</Link> is {topChef.chefName}</p>
      <p>The healthest recipe we have are:</p>
      <ul>
        {
          healthyRecipes.map( recipe => <li key={recipe.id} ><Link to={`/recipes/${recipe.id}`} >{recipe.name}</Link></li>)
        }
      </ul>
    </div>
  )
}

const Best = connect(({chefs, recipes})=> {
  return {
    chefs,
    recipes
  }
})(_Best)

export default Best;
