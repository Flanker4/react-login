import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, Button, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Common.css'
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const login = e.target.elements[0].value
    const pass = e.target.elements[1].value
   
    if (this.props.storage.checkLogin(login,pass)){
      this.props.updateStateWithStorage(this.props.storage)
      this.props.history.push('/users')
    }else{
      confirmAlert({
        title: 'Wrong username or password',                        // Title dialog 
        message: 'Do you want register a new user?',               // Message dialog 
        confirmLabel: 'Register',                           // Text button confirm 
        cancelLabel: 'Cancel',                             // Text button cancel 
        onConfirm: () => this.props.history.push('/register') ,    // Action after Confirm 
        onCancel: () => {},
      })
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