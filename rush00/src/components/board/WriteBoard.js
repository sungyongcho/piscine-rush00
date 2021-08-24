import React, { useState } from 'react';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
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
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <br />
      <div className="container">
        <MDEditor value={text} onChange={setText} />
        <div>
          <MDEditor.Markdown source={text} />
        </div>
        <div> {text}</div>
      </div>
      <br />
      <Button type="submit" onClick={handleUpdateWrite}>
        Update
      </Button>
      <br />
    </form>
  );
};

export default WriteBoard;
