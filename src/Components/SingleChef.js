import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios"
import { updateChefsThunk } from '../redux/store';

class _SingleChef extends Component{
  constructor(){
    super()
    this.state={
      chefs: []
    }
  }
  async componentDidMount(){
    const id = this.props.match.params.id;
    const chefs = (await axios.get(`/api/chefs/${id}`)).data
    this.setState({chefs})
  }
  async componentDidUpdate(prevProps){
    const id = this.props.match.params.id;
    if(id !== prevProps.match.params.id){
      const chefs = (await axios.get(`/api/chefs/${id}`)).data
      this.setState({chefs});
    }
  }
  render(){
    const {chefs} = this.state
    const {recipes} = this.props

    const filtering = recipes.filter(recipe => {
      if(recipe.chefId === chefs.id){
        return recipe
      }
    })


    return (
      <div  >
        <div className='ordering' >
          <h3>
            {chefs.chefName}
            <br/>
            Email: {chefs.email}
            <br/>
            <img src={chefs.imageUrl} width='200px' height='200px' />
            <br/>
            Chef Score: {chefs.chefScore}
            <br/>
          </h3>
        </div>
        Recipes:
        <ul>
          {
            filtering.map( recipe => <li key={recipe.id} ><Link to={`/recipes/${recipe.id}`} >{recipe.name}</Link></li>)
          }
        </ul>
    </div>
      )
  }
}
const SingleChef = connect(({recipes})=>{
  return {
    recipes,
  }
}, (dispatch)=>{
  return {
    toUpdate: (chef) => dispatch(updateChefsThunk(chef))
  }
})(_SingleChef)


export default SingleChef
