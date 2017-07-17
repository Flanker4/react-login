import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Common.css'

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  
  handleLogout(e) {
    const userPass = window.localStorage.removeItem('token')
    this.context.router.history.push('/login')
  }
  
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          movies: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="CenteredForm">Loading...</div>
      );
    }

    return (
      <div className="CenteredForm">
      <h3>Users!</h3>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {this.state.movies.map(function(user) {
          return (
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            </tr>
          );
        })}   
        </tbody>
        </Table>
        <Button onClick={this.handleLogout}>Logout</Button>
      </div>
    ); 
  }
}

Admin.contextTypes = {
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
};