import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, Button, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Common.css'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const login = e.target.elements[0].value
    const pass = e.target.elements[1].value
    const passConfirm = e.target.elements[2].value
    if (pass===passConfirm){
      this.props.storage.registerUser(login, pass)
      this.props.history.push('/login')
    }
    
  }
  render() {
    return (
           <div  className="CenteredForm">
        <h3>Registration</h3>
        <form onSubmit={this.handleSubmit}>
           <FormGroup>
             <FormControl type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
             <FormControl type="password" placeholder="Password" />
          </FormGroup>
           <FormGroup>
             <FormControl type="password" placeholder="Confirm Password" />
          </FormGroup>
          <div>
          <Button type='submit'>Registration</Button>
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