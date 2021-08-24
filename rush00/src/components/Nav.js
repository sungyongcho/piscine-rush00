import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => (
  <Navbar>
    <Link to="/">
      <Button type="button">Main</Button>
    </Link>
    <Link to="/account/login">
      <Button type="button">Login</Button>
    </Link>
    <Link to="/account/logout">
      <Button type="button">Logout</Button>
    </Link>
    <Link to="/account/profile">
      <Button type="button">Profile</Button>
    </Link>
    <Link to="/board">
      <Button type="button">Board</Button>
    </Link>

    {/* <ul>
      <li>
        <Link to="/">
          <Button type="button">Main</Button>
        </Link>
      </li>
      <li>
        <Link to="/account/login">
          <Button type="button">Login</Button>
        </Link>
      </li>
      <li>
        <Link to="/account/logout">
          <Button type="button">Logout</Button>
        </Link>
      </li>
      <li>
        <Link to="/account/profile">
          <Button type="button">Profile</Button>
        </Link>
      </li>
      <li>
        <Link to="/board">
          <Button type="button">Board</Button>
        </Link>
      </li>
    </ul> */}
  </Navbar>
);

export default Nav;
