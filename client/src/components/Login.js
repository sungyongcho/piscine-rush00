import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>This is Login Page.</h1>
      <form>
        <input type="text" placeholder="username" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
        <br />
      </form>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
};

export default Login;
