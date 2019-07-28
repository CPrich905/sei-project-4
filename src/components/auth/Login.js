import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, error: '', user: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/profile')
      })
      .catch(() => this.setState({ error: 'Invalid Credentials '}))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Login STYLE!</h2>
            <div className="field">
              <label className="field">
                <div className="control">
                  <input
                    className={`input ${this.state.error ? 'is-danger': ''}`}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="field">
                <div className="control">
                  <input
                    className={`input ${this.state.error ? 'is-danger': ''}`}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </label>
            </div>
            <button type="submit" className="button is-info">Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Login
