import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import StoreCupboard from './StoreCupboard'



class Profile extends React.Component {
  constructor() {
    super()

    this.state = { user: null, shoppingList: [], storecupboard: [], storecupboardItem: '' }
    this.recipeActivated = this.recipeActivated.bind(this)
    this.storeCupChange = this.storeCupChange.bind(this)
    this.storeCupSubmit = this.storeCupSubmit.bind(this)
    this.storeCupDelete = this.storeCupDelete.bind(this)
    this.ingredientClicked = this.ingredientClicked.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: 'Invalid Credentials' }))
  }

  isOwner(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user.id
  }

  recipeActivated({ id }){
    axios.get(`/api/recipes/${id}`)
      .then(res => this.setState({ shoppingList: [...this.state.shoppingList, ...JSON.parse(res.data.ingredients)] }))
      .catch(err => console.log(err))
  }

  ingredientClicked(e, i){
    const shoppingList = this.state.shoppingList
    const newShoppingList = shoppingList.filter((ingredient, id) => {
      return id !== i
    })
    this.setState({ shoppingList: newShoppingList })
  }

  recipeClicked(e, i) {
    this.props.history.push(`/recipes/${i.id}`)
  }

  storeCupChange(e) {
    this.setState({ storecupboardItem: e.target.value })
  }

  storeCupSubmit(e) {
    e.preventDefault()
    const storecupboard = [...this.state.storecupboard, this.state.storecupboardItem]
    this.setState({ storecupboard, storecupboardItem: '' })
  }

  storeCupDelete(e, index){
    const storecupboard = this.state.storecupboard
    const newCupboard = storecupboard.filter((ingredient, id) => {
      return id !== index
    })
    this.setState({ storecupboard: newCupboard })

  }


  render(){
    if (!this.state.user) return null
    const user = this.state.user
    return (
      <div className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-8 is-vertical">
              <div className="tile">
                <article className="tile is-child">
                  <div className="content">
                    <p className="title">Welcome back {user.username}!</p>
                    <p>Add your stock ingredients in the store-cupboard box to the right. These are things that you always have on hand - you can delete these later just by clicking on them, or add more if you need to.</p>
                    <hr />
                    <p>Your favourite recipes are listed below - click to add the ingredients to your shopping list, then check against your storecupboard before you head to the shops. Already have an item in your storecupboard? Just click to remove it from your shopping list.</p>
                  </div>
                </article>
                <article className="tile is-child is-4">
                  <div className="content">
                    <StoreCupboard
                      storeCupSubmit={this.storeCupSubmit}
                      storeCupChange={this.storeCupChange}
                      storecupboardItem={this.state.storecupboardItem}
                    />
                    {this.state.storecupboard.map((item, i) => (
                      <div
                        key={i}
                        value={item}
                        onClick={(e) => this.storeCupDelete(e, i)}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>


              <div className="tile is-parent is-8">
                <article className="tile is-child">
                  <div className="content">
                    <p className="title">Your favourites are: </p>
                    {user.likes.map((like) =>
                      <div
                        key={like.id}>
                        <p className="title is-5">{like.name}</p>
                        <a
                          className="button"
                          onClick={() => this.recipeActivated(like)}>Add ingredients to shopping list</a>
                        <a
                          className="button"
                          onClick={(e) => this.recipeClicked(e, like)}>Go to recipe</a>
                        <figure className="image">
                          <img src={like.img} />
                        </figure>
                        <hr />
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent is-4">
              <article className="tile is-child">
                <div className="content">
                  <div className="columns is-mobile is-multiline">
                    <p className="title">Shopping list</p>
                    <br />
                    <div className="content">
                      {this.state.shoppingList.map((item, i) =>
                        <p
                          key={i}
                          value={item}
                          onClick={(e) => this.ingredientClicked(e, i)}>
                          {item}
                        </p>)}
                    </div>
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

export default Profile
