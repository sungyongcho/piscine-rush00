import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Comment = ({ commentId, comment, author, username }) => {
  const [newComment, setNewComment] = useState(comment);
  const handleNewComment = (e) => {
    e.preventDefault();
    axios
      .post('/comment/write', {
        newComment,
      })
      .then()
      .catch();
  };

  if (author === username) {
    return (
      <li>
        <span>
          {/* 수정누르면 수정창떠야함 */}
          <Button type="button" onClick={handleModifyComment}>
            수정
          </Button>
        </span>
        <span>
          <Button type="button" onClick={handleNewComment}>
            적용
          </Button>
        </span>
        <Link to="/comment/write" params={{ commentId }} />
      </li>
    );
  }
  return (
    <li type="button">
      {commentId}) {text} | {author}
    </li>
  );
};

Comment.propTypes = {
  commentId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Comment;
