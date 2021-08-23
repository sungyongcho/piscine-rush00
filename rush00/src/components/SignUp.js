import React, { useState } from 'react';
import axios from 'axios';

const SingUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleSignUp = () => {
    axios.defaults.baseURL = `http://localhost:${process.env.EXPRESS_PORT}`;
    axios
      .post('/accout/signup', {
        username,
        password,
        email,
        phonenumber,
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
          placeholder="password(6글자이상)"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$"
          required
        />
        <br />
        <input
          type="password"
          placeholder="check password"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$"
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="email"
          pattern=".+@globex\.com"
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
        <button type="submit" onCllick={handleSignUp}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SingUp;
