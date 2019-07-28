import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class RecipeShow extends React.Component {
  constructor () {
    super()
    this.state = { recipe: null, user: null }

    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  handleLike() {
    console.log('like is firing')
    axios.post(`/api/recipes/${this.state.recipe.id}/like`, null, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/profile'))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    axios.get(`/api/recipes/${this.props.match.params.id}`)
      .then(res => this.setState({ recipe: res.data, user: res.data.chef.id }))
      .catch(err => console.log(err))
  }

  isOwner(){
    console.log()
    return Auth.getPayload().sub === this.state.recipe.chef.id
  }

  deleteRecipe(){
    console.log('delete')
    axios.delete(`/api/recipes/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/recipes'))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.recipe) return null
    const { recipe } = this.state
    console.log(recipe)
    return (
      <div className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-8 is-vertical">
              <article className="tile is-child">
                <h2 className="title">{recipe.name}</h2>
                <figure className="image is-4by3">
                  <img src={recipe.img} alt={recipe.name} />
                </figure>
                <p className="subtitle">Recipe submitted by: {recipe.chef.username}</p>
              </article>
            </div>
            <div className="tile is-child is-4">
              <p className="title">Instructions</p>
              <div className="content">{recipe.instructions}</div>
            </div>
            <div>
              {Auth.isAuthenticated() && <button className="button" onClick={() => this.handleLike()}>Like</button>}
              {this.isOwner() && <Link
                className="button"
                to={`/recipes/${recipe.id}/edit`}
              >
              Edit
              </Link>}
              {this.isOwner() && <button className="button is-danger" onClick={this.deleteRecipe}>Delete</button>}
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <div className="content">
                  <p className="title">Ingredients</p>
                  <div className="content">
                    {recipe.ingredients}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default RecipeShow
