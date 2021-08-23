import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  return (
    <div>
      <h1>This is Profile page.</h1>
      <ul>
        <li>username: {location.params.username.value}</li>
        <li>email: {location.params.email.value}</li>
        <li>phonenumber: {location.params.phonenumber.value}</li>
      </ul>
    </div>
  );
};

export default Profile;
