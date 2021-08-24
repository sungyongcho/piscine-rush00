const sequelize = require("sequelize");
const { Board } = require('../../models')

const showBoardList = async (req, res) => {
    const pageNum = req.query.page;
    const ret = [];
    
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
  
      resolve.map((element, index) => {
        ret[index] = {
          content_id: element.dataValues.id,
          title: element.dataValues.title,
        }
      });
      
      data.contentInfos = ret;
      res.json(data.contentInfos);
    });
  };

module.exports.showBoardList = showBoardList;
