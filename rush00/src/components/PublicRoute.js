import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../utils/isLogin';

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  // restricted = false: public rounte
  // restricted = true : restricted route
  <Route
    {...{ rest }}
    render={(props) =>
      isLogin() && restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...{ props }} />
      )
    }
  />
);

export default PublicRoute;
