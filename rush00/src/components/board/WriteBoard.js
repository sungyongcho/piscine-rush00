import React, { useState } from 'react';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const WriteBoard = ({ contentId, defaultTitle, defaultContent }) => {
  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState(defaultContent);

  const handleUpdateWrite = () => {
    if (defaultTitle === '') {
      axios
        .post('/board/write', {
          title,
          content,
        })
        .catch(console.log);
    } else {
      axios
        .put('/board/write', {
          contentId,
          title,
          content,
        })
        .catch(console.log);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="글 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <div className="container">
        <MDEditor value={content} onChange={setContent} />
        <MDEditor.Markdown source={content} />
      </div>
      <Button type="submit" onClick={handleUpdateWrite}>
        Update
      </Button>
      <br />
    </form>
  );
};

WriteBoard.propTypes = {
  contentId: PropTypes.string.isRequired,
  defaultTitle: PropTypes.string.isRequired,
  defaultContent: PropTypes.string.isRequired,
};

export default WriteBoard;
