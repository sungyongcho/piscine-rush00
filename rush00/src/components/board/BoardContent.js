import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import WriteComment from '../comment/WriteComment';
import CommentList from '../comment/CommentList';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoardContent = ({ contentId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [author, setAuthor] = useState('');
  const [comments, setComments] = useState([]);

  axios
    .get(`/board/content/board_id=${contentId}`)
    .then((res) => {
      setTitle(res.data.getBoard.boardData.title);
      setContent(res.data.getBoard.boardData.content);
      setUsername(res.data.getBoard.requestUser);
      setAuthor(res.data.getBoard.boardData.author);
      setComments(res.data.getBoards.contentData);
    })
    .catch(console.log);

  if (author === username) {
    return (
      <div>
        <h2>{title}</h2>
        <br />
        <small>{author}</small>
        <br />
        <div>
          <MDEditor.Markdown source={content} />
        </div>
        <Link
          to="/board/write"
          params={{ contentId, defaultTitle: title, defaultContent: content }}
        >
          <Button type="button">Modify</Button>
        </Link>
        {/* <CommentList comments={comments} /> */}
        {/* <WriteComment /> */}
      </div>
    );
  }
  return (
    <div>
      <h2>{title}</h2>
      <br />
      <small>{author}</small>
      <br />
      <div>
        <MDEditor.Markdown source={content} />
      </div>
      {/* <CommentList comments={comments} /> */}
      {/* <WriteComment /> */}
    </div>
  );
};

BoardContent.propTypes = {
  contentId: PropTypes.number.isRequired,
};

export default BoardContent;
