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

      <section className="section">
        <div className="container">
          <h1>HOMEPAGE</h1>
          <h2>Add login, register & browse options</h2>
        </div>
      </section>
    )
  }
}

export default Homepage
//
// fetch('/api/recipes')
//   .then(res => res.json())
//   .then(recipes => console.log(recipes))
//   .catch(err => console.log(err))
