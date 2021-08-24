import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoardContentList = ({ contentInfos }) => {
  const boardContentList = contentInfos.map(
    ({ contentId, title, writername }) => (
      <form>
        <Link to={`/board/content/${contentId}`} params={{ contentId }}>
          <Button type="button">
            {contentId}) title: {title} by {writername}
          </Button>
        </Link>
      </form>
    ),
  );

  return <div>{boardContentList}</div>;
};

BoardContentList.propTypes = {
  contentInfos: PropTypes.arrayOf({
    concontentIdtent_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    writername: PropTypes.string.isRequired,
  }).isRequired,
};

export default BoardContentList;
