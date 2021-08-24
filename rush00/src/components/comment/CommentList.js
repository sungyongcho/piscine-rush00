import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  const commentList = comments.map(({ commentId, text, author, username }) => (
    <ul>
      <Comment
        commentId={commentId}
        text={text}
        author={author}
        username={username}
      />
    </ul>
  ));

  return <div>{commentList}</div>;
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf({
    commentId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentList;
