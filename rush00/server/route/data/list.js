const sequelize = require("sequelize");

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
  
      const newJson = resolve.map((element, index) => {
        const returnObj = {};
        returnObj[index] = {
          content_id: element.dataValues.id,
          title: element.dataValues.title,
        };
  
        return returnObj;
      });
      console.log(newJson);
  
      data.contentInfos = newJson;
      res.json(data.contentInfos);
    });
  };

module.exports.showBoardList = showBoardList;