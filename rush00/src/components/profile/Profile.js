import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../etc/Spinner';
import getCookie from '../../utils/isLogin';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [loading, setLoading] = useState({ loading: true });
  const [display, setDisplay] = useState(<Spinner />);

  console.log(getCookie('jwt_token'));
  axios
    .get('/account/profile/', {
      header: {
        Cookie: getCookie('jwt_token'),
      },
    })
    .then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhonenumber(res.data.phonenumber);
      setLoading({ loading: false });
      console.log('hello world');
    })
    .catch(console.log);

  useEffect(() => {
    setDisplay(
      <div>
        <h1>Your profile page</h1>
        <ul>
          <li>username: {username}</li>
          <li>email: {email}</li>
          <li>phonenumber: {phonenumber}</li>
        </ul>
      </div>,
    );
  }, [loading]);

  return display;
};

export default Profile;
