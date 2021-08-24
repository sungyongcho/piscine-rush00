const { User, Board } = require('../../models');

const showBoardList = (req, res) => {
  const query = req.query;

  const max = Number(query.post) * 10;
  const min = max - 9;
  const data = {
    contentInfos : []
  }

  for (let i = 0; i < 10; i++) {
    const boardData = Board.findOne({
      where: {
        id: min,
      },
    })
    if (boardData) {
      const userId = User.findOne({
        where: {
          id: boardData.user_id,
        }
      })
      data.contentInfos[i] = {
        contentId: boardData.board_id,
        title: boardData.title,
        writename: userId.username,
      }
    }
  }

  res.json(data);
};

module.exports.showBoardList = showBoardList;