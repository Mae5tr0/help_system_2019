import React from "react";
import { Redirect, Switch } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";

import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import {
  TicketList as TicketListView,
  UserList as UserListView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from "./views";

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/tickets" />
      <RouteWithLayout
        component={UserListView}
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={TicketListView}
        layout={MainLayout}
        path="/tickets"
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
