import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

import { BrowserRouter, Switch, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Storage from './Storage'


this.storage = new Storage()

const childProps = {
      userToken: window.localStorage.getItem("token"),
      updateUserToken: this.storage.updateUserToken,
      checkLogin: this.storage.checkLogin,
      registerUser: this.storage.registerUser
};

ReactDOM.render(
<BrowserRouter>
  <div>
   <Routes childProps={childProps} />
  </div>
</BrowserRouter>
,
  document.getElementById('root'));
registerServiceWorker();
