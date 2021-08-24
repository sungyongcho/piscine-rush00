const { User, Board } = require('../../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;

const showBoardList = async (req, res) => {
  const pageNum = req.query.page;

  let offset = 0;
  const data = {
    contentInfos: [],
  };
  if (pageNum > 1) {
    offset = 10 * (pageNum - 1);
  }

  const boardData = Board.findAll({
    // pagination
    offset,
    limit: 10,
  });

  boardData.then((resolve) => {
    data.contentInfos = resolve;
    res.json(data.contentInfos);

    console.log(resolve);
  });
}
module.exports.showBoardList = showBoardList;