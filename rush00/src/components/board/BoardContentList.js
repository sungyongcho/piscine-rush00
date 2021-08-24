import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoardContentList = ({ contentInfos }) => {
  console.log('hihi10');
  console.log(contentInfos);
  console.log('hihi10');
  const boardContentList = contentInfos.map(({ contentId, title, author }) => (
    <form>
      <Link to={`/board/content/${contentId}`} params={{ contentId }}>
        <Button type="button">
          {contentId}) title: {title} by {author}
        </Button>
      </Link>
    </form>
  ));

  return <div>{boardContentList}</div>;
};

BoardContentList.propTypes = {
  contentInfos: PropTypes.arrayOf({
    contentId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BoardContentList;
