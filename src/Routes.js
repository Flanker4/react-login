import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';

import Login from './components/Login'
import Register from './components/Register'
import Users from './components/Users'


export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Login} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/register" exact component={Register} props={childProps} />
    <AuthenticatedRoute path="/users" exact component={Users} props={childProps} />
  </Switch>
);
