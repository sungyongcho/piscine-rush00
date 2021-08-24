import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import { useJwt } from 'react-jwt';
import { Cookies } from 'react-cookie';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { setJwt } from 'cookie-parser';

const cookies = new Cookies();
export const setCookie = (name, value, option) =>
  cookies.set(name, value, { ...option });
export const getCookie = (name) => cookies.get(name);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log('login');
    axios
      .post('/account/login', {
        username,
        password,
      })
      .then((res) => {
        console.log('check-cookies');
        console.log(getCookie('jwt_token'));
        console.log(res);
        window.location = res.data.redirect;
      })
      .catch(<Redirect to="/account/signup" />);
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
