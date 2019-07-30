import React from 'react'
import axios from 'axios'
import RecipeForm from './RecipeForm'
import Auth from '../../lib/Auth'

class RecipeEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, cuisines: [], tags: [], ingredients: [], newIngredient: '', instructions: [], newInstruction: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTimeHr = this.handleTimeHr.bind(this)
    this.handleTimeMin = this.handleTimeMin.bind(this)
    this.handleCuisine = this.handleCuisine.bind(this)
    this.handleTags = this.handleTags.bind(this)
    this.handleIngredient = this.handleIngredient.bind(this)
    this.ingredientChange = this.ingredientChange.bind(this)
    this.handleInstruction = this.handleInstruction.bind(this)
    this.instructionChange = this.instructionChange.bind(this)
    this.deleteInstruction = this.deleteInstruction.bind(this)
    this.deleteIngredient = this.deleteIngredient.bind(this)
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/cuisines'),
      axios.get('/api/tags')
    ])
      .then(axios.spread((cuisinesData, tagsData) => {
        const cuisines = this.formatCuisines(cuisinesData.data)
        const tags = this.formatTags(tagsData.data)
        this.setState({ cuisines, tags })
      }))
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
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

  formatTags(tags) {
    return tags.map(tag => ({ value: tag.id, label: tag.name}))
  }

  handleCuisine(selected) {
    const cuisines = selected.map(selection => selection.value)
    const data = {...this.state.data, cuisines_id: cuisines}
    this.setState({ data })
  }

  handleTags(selected) {
    const tags = selected.map(selection => selection.value)
    const data = {...this.state.data, tags_id: tags}
    this.setState({ data })
  }

  ingredientChange(e){
    this.setState({ newIngredient: e.target.value })
  }

  handleIngredient(){
    const ingredients = [...this.state.ingredients, this.state.newIngredient]
    console.log(ingredients)
    this.setState({ ingredients, newIngredient: '' })
  }

  instructionChange(e){
    this.setState({ newInstruction: e.target.value })
  }

  handleInstruction(){
    const instructions = [...this.state.instructions, this.state.newInstruction]
    this.setState({ instructions, newInstruction: '' })
  }

  deleteInstruction(e, index){
    const instructions = this.state.instructions
    const newInstructions = instructions.filter((instruction, id) => {
      return id !== index
    })
    this.setState({ instructions: newInstructions })
    console.log(newInstructions)
  }

  deleteIngredient(e, index) {
    const ingredients = this.state.ingredients
    const newIngredients = ingredients.filter((ingredient, id) => {
      return id !== index
    })
    this.setState({ ingredients: newIngredients})
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/recipes/${this.props.match.params._id}`, this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/recipes/${this.props.match.params._id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    return(
      <section className="section">
        <div className="main">
          <RecipeForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleTimeHr={this.handleTimeHr}
            handleCuisine={this.handleCuisine}
            handleTags={this.handleTags}
            cuisines={this.state.cuisines}
            tags={this.state.tags}
            ingredient={this.state.newIngredient}
            ingredients={this.state.ingredients}
            handleIngredient={this.handleIngredient}
            ingredientChange={this.ingredientChange}
            instruction={this.state.newInstruction}
            instructions={this.state.instructions}
            handleInstruction={this.handleInstruction}
            instructionChange={this.instructionChange}
            deleteInstruction={this.deleteInstruction}
            deleteIngredient={this.deleteIngredient}
          />
        </div>
      </section>
    )
  }
}

export default RecipeEdit
