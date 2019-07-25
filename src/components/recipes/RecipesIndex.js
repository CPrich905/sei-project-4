import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

class RecipesIndex extends Component {
  constructor() {
    super()

    this.state = { recipes: null }
  }

  componentDidMount() {
    axios.get('/api/recipes')
      .then(res => this.setState({ recipes: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.recipes) return null
    const recipes = this.state.recipes
    console.log(recipes)
    return (
      <section>
        <h1> Recipes Index </h1>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {recipes.map(recipe =>
              <div key={recipe.id}>{recipe.name}
              </div>
            )}

          </div>
        </div>
      </section>
    )
  }

}


export default RecipesIndex
