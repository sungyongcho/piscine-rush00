// Spinner.js
import React from 'react';
import Loader from 'react-loader-spinner';

function Spinner() {
  return (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000}>
      <b>로딩중</b>
    </Loader>
  );
}

export default Spinner;
