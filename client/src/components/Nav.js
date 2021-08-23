import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">
        <button>Main</button>
      </Link>
      <Link to="/account/login">
        <button>Login</button>
      </Link>
      <Link to="/account/profile">
        <button>Profile</button>
      </Link>
      <Link to="/board">
        <button>Board</button>
      </Link>
    </>
  );
};

export default Nav;
