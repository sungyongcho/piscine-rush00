import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  axios //
    .get('/account/logout')
    .then(<Redirect to="/" />)
    .catch((e) => {
      console.log(e);
    });
};

export default Logout;
