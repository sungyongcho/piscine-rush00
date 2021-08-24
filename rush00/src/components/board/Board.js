import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardContentList from './BoardContentList';
import Paging from './Paging';

const Board = () => {
  const [contentInfos, setContentInfos] = useState([]);
  axios
    .get(`/board`, {
      params: { page: 1 },
    })
    .then((res) => {
      console.log(res);
      setContentInfos(res.data.contentInfos);
    })
    .catch(console.log);

  return (
    <div>
      <h1>This is board page.</h1>
      <BoardContentList contentInfos={contentInfos} />
      <Link to="/board/write">
        <Button type="button">write</Button>
      </Link>
      <Paging />
    </div>
  );
};

export default Board;
