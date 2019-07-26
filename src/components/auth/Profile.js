import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class Profile extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
    // this.logout = this.logout.bind(this)
    this.getData = this.getData.bind(this)
    this.isOwner = this.isOwner.bind(this)
  }

  // logout() {
  //   Auth.logout()
  //   this.props.history.push('/')
  // }

  componentDidMount() {
    console.log('did mount')
    this.getData()
  }

  getData(){
    console.log('getting data')
    axios.get('/api/profile', {
      headers: { Authorization: `${Auth.getToken()}`}
    })
      .then(res => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: 'Invalid Credentials' }))

  }

  isOwner(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user.id
  }

  render(){
    if (!this.state.user) return null

    console.log('renders')
    return (
      <main className="section">
        <div className="container">
          <h1>Profile Page</h1>
          <p>`{this.state.user.username}`</p>
        </div>
      </main>
    )
  }
}

export default Profile
