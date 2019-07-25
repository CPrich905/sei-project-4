import React from 'react'
import RecipeForm from './RecipeForm'
import axios from 'axios'
import Auth from '../../lib/Auth'

class RecipeCreate extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, cuisines: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTimeHr = this.handleTimeHr.bind(this)
    this.handleTimeMin = this.handleTimeMin.bind(this)
    this.handleCuisine = this.handleCuisine.bind(this)

  }

  componentDidMount() {
    axios.get('/api/cuisines')
      .then(res => {
        this.setState({ cuisines: res.data })
      })
      .catch(err => console.log(err))
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

  formatCuisines(cuisines) {
    return cuisines.map(cuisine => ({ value: cuisine.id, label: cuisine.name }))
  }

  handleCuisine(selected) {
    const cuisines = selected.map(selection => selection.value)
    const data = {...this.state.data, cuisines_id: cuisines}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = this.state.data
    axios.post('/api/recipes', data, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/recipes'))
      .catch(err => console.log(err))
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
            cuisines={this.formatCuisines(this.state.cuisines)}
          />
        </div>
      </main>
    )
  }
}

export default RecipeCreate
