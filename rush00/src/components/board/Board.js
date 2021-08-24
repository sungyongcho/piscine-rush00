import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardContentList from './BoardContentList';
import Spinner from '../etc/Spinner';
import './Board.css';

const Board = () => {
  const [loading, setLoading] = useState({ loading: true });
  const [contentInfos, setContentInfos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`/board`, {
        params: { page },
      })
      .then((res) => {
        setContentInfos(res.data.contentInfos);
      })
      .catch(console.log);
  }, [page]);

  return (
    <div>
      {loading ? <Spinner /> : null}

      <h1>This is board page.</h1>
      <BoardContentList contentInfos={contentInfos} />
      <Link to="/board/write" params={{ defaultTitle: '', defaultContent: '' }}>
        <Button type="button">write</Button>
      </Link>
      <Pagination
        activePage={page} // 현제페이지
        itemsCountPerPage={10} // 한페이지당 보여줄 리스트 아이템의 수
        totalItemsCount={450} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator에서 보여줄 페이지의 범위
        prevPageText="‹" // 이전을 나타낼 텍스트
        nextPageText="›" // 다음을 나타낼 텍스트
        onChange={(e) => setPage(e.target.value)} // 페이지가 바뀔때 handling해줄 함수
      />
    </div>
  );
};

export default Board;
