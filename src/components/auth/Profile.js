import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import StoreCupboard from './StoreCupboard'


class Profile extends React.Component {
  constructor() {
    super()

    this.state = { user: null, shoppingList: [], storecupboard: [], storecupboardItem: '' }
    // this.logout = this.logout.bind(this)
    // this.getData = this.getData.bind(this)
    // this.isOwner = this.isOwner.bind(this)
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
    // console.log('did mount')
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
    console.log('before removal', storecupboard)

    const newstorecupboard =  index >= 0 ? [
      storecupboard.slice(0, index),
      storecupboard.slice(index + 1)
    ] : storecupboard

    console.log('new', newstorecupboard)
    console.log('spread new', ...newstorecupboard)
    this.setState({ storecupboard: [...newstorecupboard] })
    console.log('newly saved storecupboard', storecupboard)

  }
  // remove item from array of storecupboard
  // spread from state, find item in array, remove from array & set state


  render(){
    if (!this.state.user) return null
    const user = this.state.user
    return (
      <main className="section">
        <div className="container">
          <h1>Profile Page</h1>
          <p>User is {user.username}</p>
          <p>{user.username}s favourite recipes are </p>
          {user.likes.map(like =>
            <p key={like.id} onClick={() => this.handleClick(like)}>{like.name}</p>
          )}

          <h2>Store Cupboard</h2>
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

          <hr />

          <h2>Shopping list</h2>
          {this.state.shoppingList.map((item, index) => <p key={index}>{item}</p>)}


        </div>
      </main>
    )
  }
}

export default Profile
