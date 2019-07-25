import React from 'react'
import RecipeForm from './RecipeForm'

class RecipeCreate extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTimeHr = this.handleTimeHr.bind(this)
    this.handleTimeMin = this.handleTimeMin.bind(this)
    this.handleCuisine = this.handleCuisine.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleTimeHr({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleTimeMin({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleCuisine(e) {
    const data = { ...this.state.data, cuisine: e.value }
    this.setState({ data })
  }
  // handleClick - selectors
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
  }


  render() {
    return (
      <main className="section">
        <div className="container">
          <h2>NEW RECIPE</h2>
          <RecipeForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleTimeHr={this.handleTimeHr}
            handleCuisine={this.handleCuisine}
          />
        </div>
      </main>
    )
  }
}

export default RecipeCreate
