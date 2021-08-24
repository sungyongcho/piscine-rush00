const { User, Board } = require('../../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;

const showBoardList = async (req, res) => {
  const query = req.query;

  if (!query.post) query.post = 1;

  const max = Number(query.post) * 10;
  const min = max - 9;
  const data = {
    contentInfos : []
  }

  const boardData = await Board.findAll({
    attributes: ['user_id', 'title', 'id'],
    where: {
      id: { [Op.gte]: min, [Op.lte]: max},
    }
  })

  for (let i = 0; i < 10; i++) {
    const userData = await User.findOne({
      where: {
        id: boardData[i].dataValues.user_id
      }
    })
    data.contentInfos[i] = {
      contentId: boardData[i].id,
      title: boardData[i].title,
      writername: userData.username,
    }
  }
  
  res.json(data);
};

module.exports.showBoardList = showBoardList;