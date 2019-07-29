import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

import RecipeCard from './RecipesCard'

class RecipesIndex extends Component {
  constructor() {
    super()

    this.state = { recipes: null, cuisines: [], tags: [] }

  }

  componentDidMount() {
    // this.getData()
    this.getRecipes()

  }

  getRecipes(){
    axios.get('/api/recipes')
      // .then(res => console.log('res.data is', res.data))
      .then(res => this.setState({ recipes: res.data}))
      .catch(err => console.log(err))
  }
  // getCuisines(){
  //   axios.get('/api/cuisines')
  //     .then(res => this.setState({ cuisines: res.data }))
  //     .catch(err => console.log(err))
  // }
  //
  // getTags(){
  //   axios.get('/api/tags')
  //     .then(res => this.setState({ tags: res.data }))
  // }

  // getData() {
  //   axios.all([
  //     axios.get('/api/recipes'),
  //     axios.get('/api/cuisines'),
  //     axios.get('/api/tags')
  //   ])
  //     // .then(res => console.log('res.data is', res.data))
  //     .then(axios.spread((recipes, cuisines, tags) => {
  //       this.setState({ recipes, cuisines, tags })
  //     }))
  //     .catch(err => console.log(err))
  // }


  render() {
    if(!this.state.recipes) return null
    console.log('recipes rendered', this.state.recipes)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.recipes.map(recipe =>
              <RecipeCard
                key={recipe.id}
                {...recipe}
              />
            )}

          </div>
        </div>
      </section>
    )
  }

}


export default RecipesIndex
