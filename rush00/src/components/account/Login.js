import React, { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const cookies = new Cookies();
export const setCookie = (name, value, option) =>
  cookies.set(name, value, { ...option });
export const getCookie = (name) => cookies.get(name);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('/account/login', {
        username,
        password,
      })
      .then((res) => {
        getCookie('jwt_token');
        window.location = res.data.redirect;
      })
      .catch(() => {
        window.location = '/account/login';
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <h1>This is Login Page.</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <br />
        <Button type="submit" onClick={handleLogin} onKeyPress={handleKeyPress}>
          Login
        </Button>
        <br />
      </form>
      <Link to="/account/signup">
        <Button type="button">SignUp</Button>
      </Link>
    </div>
  );
};

export default Login;
