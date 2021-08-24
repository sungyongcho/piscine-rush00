const jwt = require('jsonwebtoken');
const { User, Board, Comment } = require('../../models');

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
      where: { id: param.id },
    },
  )
    .then(() => console.log('글이 수정 되었습니다.'))
    .catch((err) => console.log(`오류 발생 : ${err}`));
};

const commentWrite = async (req, res) => {
  const data = req.body;
  const param = req.params;
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

    const boardData = await Board.findOne({
      where: {
        user_id: userData.id,
      },
    }).catch((err) => console.log(`오류 발생 : ${err}`));

    await Comment.create({
      comment: data.comment,
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

module.exports.contentWrite = contentWrite;
module.exports.contentUpdate = contentUpdate;
module.exports.commentWrite = commentWrite;
module.exports.commentUpdate = commentUpdate;
