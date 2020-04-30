import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import {  connect } from 'react-redux'

import {createRecipeThunk, deleteRecipeThunk, updateChefsThunk, addChefScoreThunk, subChefScoreThunk} from '../redux/store';

class _Recipes extends Component{
  constructor(){
    super();
    this.state={
      error: ''
    }
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
    this.update = this.update.bind(this)
  }
  async create() {
    const theState = {
      name: this.state.name,
      cuisine: this.state.cuisine,
      directions: this.state.directions, healthScore: this.state.healthScore, ingredients: this.state.ingredients,
      chefId: this.state.chefId}
    try {
      if (theState.name === undefined) {
        throw 'Name for recipe is required';
      }
      if (theState.directions === undefined) {
        throw 'List directions on how to create';
      }
      if (theState.healthScore === undefined) {
        throw 'Health Score necessary';
      }
      if (theState.ingredients === undefined) {
        throw 'Ingredients are required';
      }
      if (theState.cuisine === undefined) {
        throw 'Cuisine is required';
      }
      if (theState.chefId === undefined) {
        throw 'Choose a chef in the drop down';
      }
      await this.props.toCreate(theState);
    }
    catch(ex) {
      alert(ex);
    }
  }
  async destroy(recipe){
    await this.props.toDestroy(recipe)
  }
  async update(ev) {
  const chefId = ev.target.options[ev.target.selectedIndex].value
  this.setState({...this.state, chefId: chefId})
  const chef = this.props.chefs.find(chef => chef.id === chefId)
  await this.props.toUpdate(chef)
}
  render(){
    return (
      <div>
        <form onSubmit={ev => ev.preventDefault()} className='userForm' >
          <div>Name: <input value={this.state.name} placeholder='enter name here' onChange={ev => this.setState({name: ev.target.value})} /></div>
          <div>Directions: <input value={this.state.directions} placeholder='enter directions here' onChange={ev => this.setState({directions: ev.target.value})} /></div>
          <div>Health Score: <input value={this.state.healthScore} placeholder=' between 0 - 10' onChange={ev => this.setState({healthScore: ev.target.value})} /></div>
          <div>Ingredients: <input value={this.state.ingredients} placeholder='enter ingredients here' onChange={ev => this.setState({ingredients: ev.target.value})} /></div>

          <div>
            <select name='cuisine' onChange={ev => this.setState({cuisine: ev.target.value})} >
              <option>-- Choose a cuisine type --</option>
              {
                ['American', 'Europian', 'South American', 'Asian'].map( food => <option key={food} >{food}</option>)
              }
            </select>
          </div>


          <div>
            <select onChange={(ev) => this.update(ev)}>
            <option>-- Who Made This --</option>
                {this.props.chefs.map(chef => <option key={chef.id} value={chef.id}>{chef.chefName}</option>)}
            </select>
          </div>


          <button onClick={this.create} >Add Recipe</button>
        </form>
          <div>
            <div className='ordering' >
              {
                this.props.recipes.map( recipe => <div key={recipe.id} >
                  Name: <Link to={`/recipes/${recipe.id}`} >{recipe.name}</Link>
                  <br/>
                  <img src={recipe.imageUrl} width='100px' height='100px' />
                  <br/>
                  Cuisine: {recipe.cuisine}
                  <br/>
                  <button onClick={()=> this.destroy(recipe)} >X</button>
                </div>)
              }
            </div>
          </div>
      </div>
    )
  }
}
const Recipes = connect(({chefs, recipes})=>{
  return {
    chefs,
    recipes
  }
}, (dispatch)=>{
  return {
    toCreate: (recipe) => dispatch(createRecipeThunk(recipe)),
    toDestroy: (recipe) => dispatch(deleteRecipeThunk(recipe)),
    toUpdate: (chef) => dispatch(updateChefsThunk(chef)),
    toAdd: (chef) => dispatch(addChefScoreThunk(chef)),
    toSub: (chef) => dispatch(subChefScoreThunk(chef))
  }
})(_Recipes)
///user
export default Recipes
