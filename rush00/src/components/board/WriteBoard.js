import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WriteBoard = () => {
  const [text, setText] = useState('');

  const handleWriteBoard = (e) => {
    setText(e.currentTarget.value);
  };

  const handleUpdateWrite = () => {
    axios.defaults.baseURL = `http://localhost:${process.env.EXPRESS_PORT}`;
    axios
      .post('/board/write', {
        text,
      })
      .then((res) => {
        // do something...
        console.log(res);
        //   Cookies.set('token', res.);
      })
      .catch(console.log);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="글을 입력해주세요."
        value={text}
        onChange={handleWriteBoard}
      />
      <br />
      <Button type="submit" onClick={handleUpdateWrite}>
        Update
      </Button>
      <br />
    </form>
  );
};

export default WriteBoard;
