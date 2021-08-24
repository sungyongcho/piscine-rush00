import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import isLogin from '../../utils/isLogin';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...{ rest }}
    render={(props) =>
      isLogin() ? <Component {...{ props }} /> : <Redirect to="/" />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
