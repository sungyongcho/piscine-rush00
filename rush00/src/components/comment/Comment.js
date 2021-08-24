// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Comment = ({ commentId, comment, author, username }) => {
//   const [copycomment, setCopycomment] = useState(comment);
//   const handleModifyComment = (e) => {
//     e.preventDefault();
//   };

//   if (author === username) {
//     return (
//       <li>
//         {commentId}) {comment} | {author}
//         <span>
//           <Button type="button" onClick={handleModifyComment}>
//             수정
//           </Button>
//         </span>
//         <span>
//           <Button type="button" onClick={handleNewComment}>
//             적용
//           </Button>
//         </span>
//         {/* <Link to="/comment/write" params={{ commentId }}>
//         </Link> */}
//       </li>
//     );
//   }
//   return (
//     <li type="button">
//       {commentId}) {text} | {author}
//     </li>
//   );
// };

// Comment.propTypes = {
//   commentId: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

// export default Comment;
