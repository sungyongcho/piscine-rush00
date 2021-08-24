// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const WriteComment = ({ commentId }) => {
//   const [comment, setComment] = useState('');

//   const handleWriteComment = () => {
//     axios
//       .post('/comment/write', {
//         comment,
//       })
//       .then();
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="댓글 입력"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//       />
//       <br />
//       <Button type="button" onClick={handleWriteComment}>
//         ADD
//       </Button>
//     </form>
//   );
// };

// export default WriteComment;
