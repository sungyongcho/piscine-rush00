import React, { useState } from 'react';
import axios from 'axios';

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
      <button type="submit" onClick={handleUpdateWrite}>
        Update
      </button>
      <br />
    </form>
  );
};

export default WriteBoard;
