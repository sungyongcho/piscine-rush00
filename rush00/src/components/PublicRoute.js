import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.bool.isRequired,
};

export default PublicRoute;
