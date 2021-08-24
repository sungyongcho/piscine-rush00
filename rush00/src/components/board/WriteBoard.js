import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
// import Editor from './Editor';

const WriteBoard = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('**Hello world!!!**');

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
      <div className="container">
        <MDEditor value={text} onChange={setText} />
        <MDEditor.Markdown source={text} />
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
