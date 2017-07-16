import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const login = e.target.elements[0].value
    const pass = e.target.elements[1].value
    const passConfirm = e.target.elements[2].value
    if (pass===passConfirm){
      window.localStorage.setItem('login', login)
      window.localStorage.setItem('password', pass)
      this.context.router.history.push('/login')
    }
    
  }
  render() {
    return (
      <div>
        Registration
        <form onSubmit={this.handleSubmit}>
          <div>
          <input type='text' placeholder='Email'/>
          </div>

          <div>
          <input type='password' placeholder='Password'/>
          </div>
          
          <div>
          <input type='password' placeholder='Confirm Password'/>
          </div>
          
          <div>
          <button type='submit'>Registration</button>
          </div>
          <Link to='/login'>Login</Link>
        </form>
      </div>
    )
  }
}

Register.contextTypes = {
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
};