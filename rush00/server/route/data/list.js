const { User, Board } = require('../../models');

const showBoardList = (req, res) => {
  const { query } = req;

  // const max = Number(query.post) * 10;
  // const min = max - 9;
  // const data = {
  //   contentInfos: [],
  // };

  // for (let i = 0; i < 10; i += 1) {
  //   const boardData = Board.findAll({
  //     where: {
  //       id: min,
  //     },
  //   });
  //   if (boardData) {
  //     const userId = User.findOne({
  //       where: {
  //         id: boardData.user_id,
  //       },
  //     });
  //     data.contentInfos[i] = {
  //       contentId: boardData.board_id,
  //       title: boardData.title,
  //       writename: userId.username,
  //     };
  //   }
  // }

  console.log();

  const pageNum = Number(req.query.page); // 요청 페이지 넘버
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
  }).then((resolve) => {
    data.contentInfos = resolve;
    res.json(data.contentInfos);

    console.log(resolve);
  });
};

module.exports.showBoardList = showBoardList;
