const express = require('express');

const router = express.Router();

const list = require('./data/list');
const content = require('./data/content');

router
  .get('', list.showBoardList)
  .post('/content/write', content.contentWrite)
  .put('content/:board_id/update', content.contentUpdate)
  .post('/content/:board_id', content.commentWrite)
  .put('/content/:board_id', content.commentUpdate);

module.exports = router;
