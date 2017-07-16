import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const login = e.target.elements[0].value
    const pass = e.target.elements[1].value
    const userLogin = window.localStorage.getItem('login')
    const userPass = window.localStorage.getItem('password')
    if ((login===userLogin)&&(pass==userPass)){
      this.context.router.history.push('/users')
    }
  }
  render() {
    return (
      <div>
        Login
        <form onSubmit={this.handleSubmit}>
          <div>
          <input type='text' placeholder='Email'/>
          </div>

          <div>
          <input type='password' placeholder='Password'/>
          </div>

          <div>
          <button type='submit'>Login</button>
          </div>
          <Link to='/register'>Register new user</Link>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
};