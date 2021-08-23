const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../../models');

const loginPost = async (req, res) => {
  const info = req.body;

  const userData = await User.findOne({
    where: {
      username: info.username,
    },
  });
  if (userData == null) console.log('사용자 정보가 없습니다.');
  else {
    const compare = await bcrypt.compareSync(info.password, userData.password);
    if (!compare) console.log('비밀번호가 맞지 않습니다.');
    else {
      await jwt.sign(
        { username: userData.username },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1h',
        },
        (err, token) => {
          if (err) console.log('토큰 발행을 실패 하였습니다.');
          res.cookie('jwt_token', token, { maxAge: 3600000 });
        },
      );
    }
  }
};

const singupPost = (req, res) => {
  const info = req.body;

  const hashPassword = bcrypt.hashSync(info.password, 10);

  User.create({
    username: info.username,
    password: hashPassword,
    email: info.email,
  })
    .then(() => {
      alert('회원가입을 축하드립니다.');
    })
    .catch((err) => console.log(err));
};

const logoutGet = async (req, res) => {
  let user;

  await jwt.verify(
    req.cookies.jwt_cookie,
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      user = decoded;
    },
  );

  const userData = await User.findOne({
    where: {
      username: user,
    },
  });

  if (userData.username === user) res.clearCookie('jwt_token');
  else console.log('잘못된 로그아웃 요청');
};

module.exports.loginPost = loginPost;
module.exports.logoutGet = logoutGet;
module.exports.singupPost = singupPost;
