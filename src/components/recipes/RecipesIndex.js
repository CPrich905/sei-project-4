import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

import RecipesCard from './RecipesCard'

class RecipesIndex extends Component {
  constructor() {
    super()

    this.state = { recipes: null }

  }

  componentDidMount() {
    axios.get('/api/recipes')
      // .then(res => console.log('res.data is', res.data))
      .then(res => this.setState({ recipes: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.recipes) return null
    console.log('recipes rendered', this.state.recipes)
    return (
      <section className="section">
        <h1> Recipes Index </h1>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.recipes.map(recipe =>
              <RecipesCard
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
