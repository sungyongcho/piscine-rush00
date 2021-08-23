import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <Link to="/">
      <button type="button">Main</button>
    </Link>
    <Link to="/account/login">
      <button type="button">Login</button>
    </Link>
    <Link to="/account/profile">
      <button type="button">Profile</button>
    </Link>
    <Link to="/board">
      <button type="button">Board</button>
    </Link>
  </>
);

export default Nav;
