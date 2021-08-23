import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './Paging.css';

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Pagination
      activePage={page} // 현제페이지
      itemsCountPerPage={10} // 한페이지당 보여줄 리스트 아이템의 수
      totalItemsCount={450} // 총 아이템 갯수
      pageRangeDisplayed={5} // paginator에서 보여줄 페이지의 범위
      prevPageText="‹" // 이전을 나타낼 텍스트
      nextPageText="›" // 다음을 나타낼 텍스트
      onChange={handlePageChange} // 페이지가 바뀔때 handling해줄 함수
    />
  );
};

export default Paging;
