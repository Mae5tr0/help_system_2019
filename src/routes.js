import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout';

import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import {
  ProductList as ProductListView,
  UserList as UserListView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

function Routes() {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/products"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />               
    </Switch> 
  );
}

export default Routes;