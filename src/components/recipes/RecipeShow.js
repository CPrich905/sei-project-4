import React from 'react'
import axios from 'axios'


class RecipeShow extends React.Component {
  constructor () {
    super()
    this.state = { recipe: null }
  }

  componentDidMount() {
    axios.get(`/api/recipes/${this.props.match.params.id}`)
      .then(res => this.setState({ recipe: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.recipe) return null
    const { recipe } = this.state

    return (
      <main className="section">
        <div className="container">
          <h1>Recipe Show Page</h1>
          <h2 className="title">{recipe.name}</h2>
        </div>
      </main>
    )
  }
}


export default RecipeShow
