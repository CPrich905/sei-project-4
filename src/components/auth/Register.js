import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data, errors: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(() => this.setState({ errors: 'Invalid Input'}))
  }

  render() {
    console.log(this.state.errors)
    return(
      <main className="section">
        <section className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">REGISTER</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors ? 'is-danger': ''}`}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                {this.state.errors && <p className="help is-danger">{this.state.errors}</p>}
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors} ? 'is-danger': ''`}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors && <small className="help is-danger">{this.state.errors}</small>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors ? 'is-danger': ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors && <small className="help is-danger">{this.state.errors}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className={`input ${this.state.errors ? 'is-danger': ''}`}
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors && <small className="help is-danger">{this.state.errors}</small>}
            </div>
            <button type="submit" className="button is-info">Submit</button>
          </form>
        </section>
      </main>
    )
  }
}

export default Register
