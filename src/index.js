import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login'
import Register from './components/Register'
import Users from './components/Users'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <div>
    <Route exact path="/" component={Login}/>
    <Route path='/register' component={Register} />
    <Route path='/users' component={Users} />
    <Route path='/login' component={Login} />
  </div>
</BrowserRouter>
,
  document.getElementById('root'));
registerServiceWorker();
