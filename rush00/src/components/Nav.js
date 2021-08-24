import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

const Nav = () => (
  <Container>
    <h2>Markdown Based Board</h2>
    <div id="exTab3" className="container">
      <ul className="nav nav-pills">
        <li className="active">
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
      </ul>
    </div>
  </Container>
);

export default Nav;
