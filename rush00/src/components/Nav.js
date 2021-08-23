import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleClickProfile = () => {
    axios
      .get('/account/profile', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPhonenumber(res.data.phonenumber);
      })
      .catch(console.log);
  };

  const handleClickBoard = () => {
    axios
      .get(`/board`, {
        params: { page: 1 },
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);
  };

  return (
    <div>
      <Link to="/">
        <button type="button">Main</button>
      </Link>
      <Link to="/account/login">
        <button type="button">Login</button>
      </Link>
      <Link
        to={{
          pathname: '/account/profile',
          params: {
            username: { username },
            email: { email },
            phonenumber: { phonenumber },
          },
        }}
      >
        <button type="button" onClick={handleClickProfile}>
          Profile
        </button>
      </Link>
      <Link to="/board">
        <button type="button" onClick={handleClickBoard}>
          Board
        </button>
      </Link>
      <Link to="/board/write">
        <button type="button" onClick={handleClickBoard}>
          게시글 쓰기
        </button>
      </Link>
    </div>
  );
};

export default Nav;
