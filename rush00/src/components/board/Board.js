import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import Paging from '../Paging';

const Board = () => {
  axios
    .get(`/board`, {
      params: { page: 1 },
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch(console.log);

  return (
    <div>
      <h1>This is board page.</h1>
      <Paging />
      <Link to="/board/write">
        <button type="button">write</button>
      </Link>
    </div>
  );
};

export default Board;
