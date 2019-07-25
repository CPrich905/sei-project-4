import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class UserProfile extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidMount() {
    axios.get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }


  isOwner(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user._id
  }

  render(){
    if (!this.state.user) return null
    const { user } = this.state
    console.log('user profile', user)
    this.isOwner()
    return (
      <main>
        {this.isOwner() && <h2>owner logs</h2>}
      </main>
    )
  }
}

export default UserProfile
