import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SingUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkpassword, setCheckpassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [passcheckMsg, setPasscheckMsg] = useState(
    'password를 다시 입력해주세요.',
  );

  const handleSignUp = () => {
    axios
      .post('/account/signup', {
        username,
        password,
        email,
        phonenumber,
      })
      .then((res) => {
        console.log(res);
        window.location = '/account/login';
      })
      .catch(() => {
        window.location = '/';
      });
  };

  useEffect(() => {
    console.log(password);
    if (password.length > 0 && password === checkpassword)
      setPasscheckMsg('password 일치');
    else if (password.length > 0 && checkpassword.length > 0)
      setPasscheckMsg('password 불일치');
    else setPasscheckMsg('password를 다시 입력해주세요.');
  }, [checkpassword]);

  return (
    <div>
      <h1>This is SignUp page.</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="password(대문자,소문자,숫자 포함 8글자이상)"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Re-enter password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={(e) => setCheckpassword(e.target.value)}
          required
        />
        <small>{passcheckMsg}</small>
        <br />
        <input
          type="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="tel"
          placeholder="phone number"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          onChange={(e) => setPhonenumber(e.target.value)}
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
