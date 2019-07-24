import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

class Homepage extends Component {
  constructor() {
    super()

    this.state = { recipes: null}
  }
  // component did mount

  componentDidMount() {
    // console.log('component did mount')
    axios.get('/api/recipes')
      // .then(console.log(this.state))
      // .then(res => console.log('res.data', res.data))
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err))

  }


  // getData() {
  //   fetch('/api/recipes')
  //     .then(res => res.json())
  //     .then(data => console.log(`name is ${data[0].name}`))
  //     // .then(data => this.setState)
  //     .then(data => this.setState({ recipes: data }))
  //     .then(console.log(this.recipes))
  //     .catch(err => console.log(err))
  //
  // }

  render() {
    if(!this.state.recipes) return null
    // const { recipe } = this.state
    // if (this.state.recipes) console.log('state.recipes', this.state.recipes)

    // const { recipe } = this.state
    //  pull out state
    // const { recipes } = this.state
    return (
      // console.log(this.state.recipes)
      <section className="section">
        <div className="container">
          <h1>Title goes here</h1>
          <h2>Name goes next</h2>
          <h2>{ this.state.recipes[0].name }</h2>
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
