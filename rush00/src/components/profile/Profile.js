import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../etc/Spinner';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [loading, setLoading] = useState({ loading: true });

  axios
    .get('/account/profile')
    .then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhonenumber(res.data.phonenumber);
      setLoading(false);
    })
    .catch(console.log);
  return (
    <div>
      {loading ? <Spinner /> : null}
      <h1>This is Profile page.</h1>
      <ul>
        <li>username: {username}</li>
        <li>email: {email}</li>
        <li>phonenumber: {phonenumber}</li>
      </ul>
    </div>
  );
};

export default Profile;
