import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';


import {createChefThunk, deleteChefThunk} from '../redux/store'

class _Chefs extends Component{
  constructor(){
    super();
    this.state={
      error: ''
    }
    this.create = this.create.bind(this)
    this.destroy = this.destroy.bind(this)
  }
  async create(){
    const theState = {
      chefName: this.state.chefName,
      email: this.state.email,
      chefScore: this.state.chefScore
    }
    try{
      if (theState.chefName === undefined) {
        throw 'Chef name is required';
      }
      if (theState.email === undefined) {
        throw 'email is needed';
      }
      if (theState.chefScore === undefined) {
        throw 'chef Score necessary';
      }
    await this.props.toCreate(theState);
    }
    catch(ex){
      alert(ex)
    }
  }
  async destroy(chef){
    await this.props.toDelete(chef)
  }
  render(){
    return (
      <div>
        <form onSubmit={ev => ev.preventDefault()} className='userForm' >
          <div>Chef Name: <input value={this.state.chefName} placeholder='enter name here' onChange={ev => this.setState({chefName: ev.target.value})} /></div>
          <div>Email: <input value={this.state.email} placeholder='enter email here' onChange={ev => this.setState({email: ev.target.value})} /></div>
          <div>
            <select name='chefScore'  onChange={ev => this.setState({chefScore: ev.target.value})} >
              <option>-- Choose the Chef Score --</option>
              {
                [0,1,2,3,4,5,6,7,8,9,10].map( num => <option key={num} >{num}</option>)
              }
            </select>
          </div>
          <button onClick={this.create} >Add Chef</button>
        </form>
          <div>
            <div className='ordering' >
              {
                this.props.chefs.map((chef, idx) => <div key={idx} className='spacing' >
                  Name: <Link to={`/users/${chef.id}`} >{chef.chefName}</Link>
                  <br/>
                  Score: {chef.chefScore}
                  <br/>
                  <img src={chef.imageUrl} width='100px' height='100px' />
                  <br />
                  <button onClick={()=> this.destroy(chef)} >X</button>
                </div>)
              }
            </div>
          </div>
      </div>
    )
  }
}
const Chefs = connect(({chefs, recipes})=>{
  return {
    chefs,
    recipes
  }
}, (dispatch)=>{
  return {
    toCreate: (chef) => dispatch(createChefThunk(chef)),
    toDelete: (chef) => dispatch(deleteChefThunk(chef))
  }
})(_Chefs)

export default Chefs
