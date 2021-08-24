const jwt = require('jsonwebtoken');
const { User, Board, Comment } = require('../../models');

const showBoard = async (req, res) => {
  const param = req.params;
  const data = {
    requestUser: '',
    boardData: {},
    commentData: [],
  };

  const board = await Board.findOne({
    where: {
      id: param.board_id,
    },
  }).catch((err) => console.log(`오류 발생 ${err}`));

  if (board) {
    const comment = await Comment.findAll({
      where: {
        board_id: board.id,
      },
    }).catch((err) => console.log(`오류 발생 ${err}`));

    const userBoard = await User.findOne({
      where: {
        id: board.user_id,
      },
    }).catch((err) => console.log(`오류 발생 ${err}`));

    data.boardData = {
      author: userBoard.username,
      title: board.title,
      content: board.content,
    };

    for (let i = 0; i < comment.length; i += 1) {
      const userComment = await User.findOne({
        where: {
          id: comment[i].dataValues.user_id,
        },
      });

      data.commentData[i] = {
        author: userComment.username,
        content: comment[i].dataValues.comment,
      };
    }

    await jwt.verify(
      req.cookies.jwt_token,
      process.env.JWT_SECRET_KEY,
      (err, decoded) => {
        if (err) console.log(`오류 발생 : ${err}`);
        else data.requestUser = decoded.username;
      },
    );

    res.json({ getBoard: data });
  }
};

const contentWrite = async (req, res) => {
  const data = req.body;
  let user;

  try {
    await jwt.verify(
      req.cookies.jwt_token,
      process.env.JWT_SECRET_KEY,
      (err, decoded) => {
        if (err) console.log(err);
        else user = decoded;
      },
    );

    const userData = await User.findOne({
      where: {
        username: user,
      },
    }).catch((err) => console.log(`오류 발생 : ${err}`));

    await Board.create({
      title: data.title,
      content: data.content,
      user_id: userData.id,
    })
      .then(() => console.log('글이 작성 되었습니다.'))
      .catch((err) => console.log(`오류 발생 : ${err}`));
  } catch (err) {
    console.log(err);
  }
};

const contentUpdate = (req, res) => {
  const data = req.body;
  const param = req.params;

  Board.update(
    {
      title: data.title,
      content: data.content,
    },
    {
      where: { id: param.board_id },
    },
  )
    .then(() => console.log('글이 수정 되었습니다.'))
    .catch((err) => console.log(`오류 발생 : ${err}`));
};

const commentWrite = async (req, res) => {
  const data = req.body;
  const param = req.params;
  let user;
  let commentId;

  try {
    await jwt.verify(
      req.cookies.jwt_token,
      process.env.JWT_SECRET_KEY,
      (err, decoded) => {
        if (err) console.log(err);
        else user = decoded;
      },
    );

    const userData = await User.findOne({
      where: {
        username: user,
      },
    }).catch((err) => console.log(`오류 발생 : ${err}`));

    const boardData = await Board.findOne({
      where: {
        id: param.board_id,
      },
    }).catch((err) => console.log(`오류 발생 : ${err}`));

    const commentData = await Comment.findAll({
      where: {
        board_id: boardData.id,
      },
    }).catch((err) => console.log(`오류 발생 : ${err}`));

    if (commentData) commentId = commentData.length + 1;
    else commentId = 1;

    console.log(commentId);

    await Comment.create({
      comment: data.comment,
      comment_id: commentId,
      user_id: userData.id,
      board_id: boardData.id,
    })
      .then(() => console.log('댓글 작성이 완료되었습니다.'))
      .catch((err) => console.log(`오류발생 : ${err}`));
  } catch (err) {
    console.log(err);
  }
};

const commentUpdate = (req, res) => {
  const data = req.body;
  const param = req.params;
  const { query } = req;

  Comment.update(
    {
      comment: data.comment,
    },
    {
      where: { board_id: param.id },
    },
  )
    .then(() => console.log('댓글이 수정 되었습니다.'))
    .catch((err) => console.log(`오류 발생 : ${err}`));
};

module.exports.showBoard = showBoard;
module.exports.contentWrite = contentWrite;
module.exports.contentUpdate = contentUpdate;
module.exports.commentWrite = commentWrite;
module.exports.commentUpdate = commentUpdate;
