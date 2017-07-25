import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
import Routes from './Routes';
import Stor from './Storage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null,
      storage: null
    };
  }

  async componentDidMount() {
    this.storage = new Stor()
    this.updateStateWithStorage(this.storage)
  }

  updateStateWithStorage = (storage) => {
    this.setState({
      userToken: storage.userToken,
      storage: storage
    });
  }

  render() {
    const childProps = {
      userToken: this.state.userToken,
      storage: this.storage,
      updateStateWithStorage: this.updateStateWithStorage,
    };

    return (
      <div>
       <Routes childProps={childProps} />
      </div>
    )
  }

}

export default withRouter(App);
