const { User, Board } = require('../../models');

const showBoardList = (req, res) => {
  const query = req.query;

  const max = Number(query.list_id) * 10;
  const min = max - 9;

  
};

module.exports.showBoardList = showBoardList;