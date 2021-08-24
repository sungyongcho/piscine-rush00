import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardContentList from './BoardContentList';
import Paging from './Paging';
import Spinner from '../etc/Spinner';

const Board = () => {
  const [loading, setLoading] = useState({ loading: true });
  const [contentInfos, setContentInfos] = useState([
    { contentId: 1, title: 'aaa', writername: 'bbb' },
  ]);
  axios
    .get(`/board`, {
      params: { page: 2 },
    })
    .then((res) => {
      setLoading(false);
      console.log(res);
      setContentInfos(res.data.contentInfos);
    })
    .catch(console.log);
  return (
    <div>
      {loading ? <Spinner>로딩중</Spinner> : null}
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
