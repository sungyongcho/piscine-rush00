import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WriteBoard = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleUpdateWrite = () => {
    axios.defaults.baseURL = `http://localhost:${process.env.EXPRESS_PORT}`;
    axios
      .post('/board/write', {
        title,
        text,
      })
      .catch(console.log);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="글 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="글 내용"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" onClick={handleUpdateWrite}>
        Update
      </Button>
      <br />
    </form>
  );
};

export default WriteBoard;
