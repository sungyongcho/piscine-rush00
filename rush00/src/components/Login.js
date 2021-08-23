import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';

const Login = (props) => {
  console.log(`login: ${props}`);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.currentTarget.value);
  };

  const handlePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = () => {
    // axios.defaults.baseURL = `http://localhost:${process.env.EXPRESS_PORT}`;
    axios
      .post('http://localhost:4242/account/login', {
        username,
        password,
      })
      .then((res) => {
        // do something...
        console.log(res);
        //   Cookies.set('token', res.);
      })
      .catch(console.log);
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
          onChange={handleUsername}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <button type="submit" onClick={handleLogin} onKeyPress={handleKeyPress}>
          Login
        </button>
        <br />
      </form>
      <Link to="/account/signup">
        <button type="button">SignUp</button>
      </Link>
    </div>
  );
};

export default Login;
