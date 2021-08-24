import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MDEditor from '@uiw/react-md-editor';

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

  return (
    <div>
      <h2>{title}</h2>
      <div className="container">
        <MDEditor value={content} onChange={setContent} />
        <MDEditor.Markdown source={content} />
      </div>
      <br />
      <small>{author}</small>
      <div>
        <section />
      </div>
    </div>
  );
};

BoardContent.propTypes = {
  contentId: PropTypes.number.isRequired,
};

export default BoardContent;
