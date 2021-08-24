const express = require('express');

const router = express.Router();

const list = require('./data/list');
const content = require('./data/content');

router
.put('/content/:board_id/update', content.contentUpdate)
.post('/content/write', content.contentWrite)
.get('/content/:board_id', content.showBoard)
.post('/content/:board_id', content.commentWrite)
.put('/content/:board_id', content.commentUpdate)
.get('/list', list.showBoardList)

module.exports = router;
