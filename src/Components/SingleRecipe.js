import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';
import axios from "axios"
import { updateRecipesThunk } from '../redux/store';

class _SingleRecipe extends Component{
  constructor(){
    super()
    this.state={
      recipes: []
    }
  }
  async componentDidMount(){
    const id = this.props.match.params.id;
    const recipes = (await axios.get(`/api/recipes/${id}`)).data
    this.setState({recipes})
  }
  async componentDidUpdate(prevProps){
    const id = this.props.match.params.id;
    if(id !== prevProps.match.params.id){
      const recipes = (await axios.get(`/api/recipes/${id}`)).data
      this.setState({recipes});
    }
  }
  render(){
    const {recipes} = this.state
    const mapped = recipes.user
    const user = {...mapped}
    // console.log(chef.chefName)
    return (

      <div>
        <div className='ordering' >
          <p>
            {recipes.name}
            <br/>
            <br/>
            <img src={recipes.imageUrl} width='200px' height='200px' />
            <br/>
            <br/>
            <span className='bold'>Directions:</span> {recipes.directions}
            <br/>
            <br/>
            <span className='bold'>Ingredients:</span> {recipes.ingredients}
            <br/>
            <br/>
            <span className='bold'>Cuisine:</span> {recipes.cuisine}
            <br/>
            <br/>
            <span className='bold'>Health Score:</span> {recipes.healthScore}
          </p>
        </div>
        <div>
          <h1>Creator: <Link to={`/chefs/${chef.id}`} >{chef.chefName}</Link>
            <br/>
            Chef Score: {chef.chefScore}
          </h1>
        </div>
    </div>
      )
  }
}
const SingleRecipe = connect(null, (dispatch)=>{
  return {
    toUpdate: (recipe) => dispatch(updateRecipesThunk(recipe))
  }
})(_SingleRecipe)

export default SingleRecipe
