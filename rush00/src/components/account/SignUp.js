import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SingUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleSignUp = () => {
    // axios.defaults.baseURL = `http://localhost:${process.env.EXPRESS_PORT}`;
    axios
      .post('http://localhost:4242/account/signup', {
        username,
        password,
        email,
        // phonenumber,
      })
      .then((res) => {
        // do something...
        console.log(res);
        //   Cookies.set('token', res.);
      })
      .catch(console.log);
  };

  return (
    <div>
      <h1>This is SignUp page.</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.currentTarget.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="password(대문자,소문자,숫자 포함 8글자이상)"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          required
        />
        <br />
        <input
          type="password"
          placeholder="check password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <br />
        <input
          type="tel"
          placeholder="phone number"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          onChange={(e) => setPhonenumber(e.currentTarget.value)}
          required
        />
        <small>Format: 123-4566-7890</small>
        <br />
        <Button type="submit" onClick={handleSignUp}>
          Signup
        </Button>
      </form>
    </div>
  );
};

export default SingUp;
