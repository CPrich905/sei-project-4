import React, { Component } from 'react'
import axios from 'axios'

class Homepage extends Component {
  constructor() {
    super()

    this.state = { recipes: null}
  }


  componentDidMount() {
    axios.get('/api/recipes')
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    if(!this.state.recipes) return null

    return (
      <img id="home-img" src="https://i.imgur.com/ZrIaWV1.jpg"/>
    )
  }
}

export default Homepage
//
// fetch('/api/recipes')
//   .then(res => res.json())
//   .then(recipes => console.log(recipes))
//   .catch(err => console.log(err))
