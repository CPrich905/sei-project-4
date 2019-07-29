import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import StoreCupboard from './StoreCupboard'



class Profile extends React.Component {
  constructor() {
    super()

    this.state = { user: null, shoppingList: [], storecupboard: [], storecupboardItem: '' }
    this.handleClick = this.handleClick.bind(this)
    this.storeCupChange = this.storeCupChange.bind(this)
    this.storeCupSubmit = this.storeCupSubmit.bind(this)
    this.storeCupDelete = this.storeCupDelete.bind(this)
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

  handleClick({ id }){
    const user = this.state.user
    console.log(user.likes)
    axios.get(`/api/recipes/${id}`)
      .then(res => this.setState({ shoppingList: [...this.state.shoppingList, ...JSON.parse(res.data.ingredients)] }))
      .catch(err => console.log(err))
  }

  storeCupChange(e) {
    this.setState({ storecupboardItem: e.target.value })
  }

  storeCupSubmit(e) {
    e.preventDefault()
    const storecupboard = [...this.state.storecupboard, this.state.storecupboardItem]
    this.setState({ storecupboard }, () => this.setState( { storecupboardItem: '' } ))
  }

  storeCupDelete(e){
    e.preventDefault()
    const cupboard = this.state.storecupboard
    const index = cupboard.indexOf(e.target.value)
    const storecupboard = [ ...this.state.storecupboard ]

    const newstorecupboard =  index >= 0 ? [
      storecupboard.slice(0, index),
      storecupboard.slice(index + 1)
    ] : storecupboard

    this.setState({ storecupboard: [...newstorecupboard] })

  }
  // remove item from array of storecupboard
  // spread from state, find item in array, remove from array & set state


  render(){
    if (!this.state.user) return null
    const user = this.state.user
    return (
      <div className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-8 is-vertical">
              <div className="tile">
                <article className="tile is-child is-4">
                  <div className="content">
                    <p className="title">Welcome back {user.username}!</p>
                    <p>Your favourite recipes are listed below - click to add the ingredients to your shopping list. You can add your staple ingredients or key items you want to use to your store cupboard here too.</p>
                  </div>
                </article>
              </div>
              <div className="tile is-child">
                <article className="tile is-child is-4">
                  <div className="content">
                    <StoreCupboard
                      storeCupSubmit={this.storeCupSubmit}
                      storeCupChange={this.storeCupChange}
                    />
                    {this.state.storecupboard.map((item, index) => (
                      <div key={index}>
                        <p>{item}</p>
                        <button onClick={this.storeCupDelete} value={item} >Delete item</button>
                        {/*add delete button with value of item*/}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-8">
                <article className="tile is-child">
                  <div className="content">
                    <p>Your favourites are: </p>
                    {user.likes.map(like =>
                      <div
                        key={like.id}
                        onClick={() => this.handleClick(like)}>
                        <p className="title">{like.name}</p>
                        <figure className="image">
                          <img src={like.img} />
                        </figure>
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
                      {this.state.shoppingList.map((item, index) =>
                        <p
                          key={index}>
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
