import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, Button, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Common.css'




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
      <div  className="CenteredForm">
        <h3>Login</h3>
        
        <form onSubmit={this.handleSubmit}>
           <FormGroup>
             <FormControl type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
             <FormControl type="password" placeholder="Password" />
          </FormGroup>
          
          <div>
          <Button bsSize = "large"  type='submit'>Login</Button>
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