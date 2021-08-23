import React from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Nav = () => {
  const handleClickProfile = () => {
    Axios.get('/account/profile', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
  };

  return (
    <>
      <Link to="/">
        <button type="button">Main</button>
      </Link>
      <Link to="/account/login">
        <button type="button">Login</button>
      </Link>
      <Link to="/account/profile">
        <button type="button" onClick={handleClickProfile}>
          Profile
        </button>
      </Link>
      <Link to="/board">
        <button type="button">Board</button>
      </Link>
    </>
  );
};

export default Nav;
