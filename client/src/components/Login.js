import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.currentTarget.value);
  };

  const handlePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = () => {
    Axios.post("/accout/login", {
      username: username,
      password: password,
    }).then((res) => {
      // do something...
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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
        <button>SignUp</button>
      </Link>
    </div>
  );
};

export default Login;
