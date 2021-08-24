const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../../models');

const loginPost = async (req, res) => {
  const info = req.body;
  try {
    const userData = await User.findOne({
      where: {
        username: info.username,
      },
    }).catch((err) => console.log(`오류 발생 : ${err}`));
    console.log(userData.email);
    if (userData == null) console.log('사용자 정보가 없습니다.');
    else {
      const compare = bcrypt.compareSync(info.password, userData.password);
      if (!compare) console.log('비밀번호가 맞지 않습니다.');
      else {
        console.log('로그인 성공!');
        const getToken = () =>
          new Promise((resolve, reject) => {
            jwt.sign(
              { username: userData.username },
              process.env.JWT_SECRET_KEY,
              {
                expiresIn: '1h',
              },
              (err, token) => {
                if (err) reject(err);
                else resolve(token);
              },
            );
          });
        getToken().then((token) => {
          res.cookie('jwt_token', token, {
            maxAge: 60 * 60 * 1000,
          });
          res.status(200).json({ redirect: '/' });
        });
      }
    }
  } catch (err) {
    console.log(`{ "오류 발생" : "${err}" }`);
  }
};
const singupPost = (req, res) => {
  const info = req.body;
  console.log(info);
  const hashPassword = bcrypt.hashSync(info.password, 10);
  User.create({
    username: info.username,
    password: hashPassword,
    email: info.email,
  })
    .then(() => {
      console.log('회원가입을 축하드립니다.');
      res.json({ redirect: '/' });
    })
    .catch((err) => console.log(err));
};
const logoutGet = async (req, res) => {
  let user;
  await jwt.verify(
    req.cookies.jwt_token,
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      user = decoded;
    },
  );
  console.log(user);
  const userData = await User.findOne({
    where: {
      username: user.username,
    },
  }).catch((err) => console.log(`오류 발생 ${err}`));
  if (userData.username === user.username) {
    console.log('로그아웃 성공');
    res.clearCookie('jwt_token');
    res.json({ redirect: '/' });
  } else console.log('잘못된 로그아웃 요청');
};
const getProfile = async (req, res) => {
  const userData = {
    username: '',
    email: '',
    accountDate: '',
  };
  await jwt.verify(
    req.cookies.jwt_token,
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      if (err) console.log(`오류 발생 : ${err}`);
      else userData.username = decoded.username;
    },
  );
  const user = await User.findOne({
    where: {
      username: userData.username,
    },
  }).catch((err) => console.log(`오류 발생 ${err}`));
  userData.email = user.email;
  userData.accountDate = user.created_at;
  res.json({ profile: userData });
};
module.exports.loginPost = loginPost;
module.exports.logoutGet = logoutGet;
module.exports.singupPost = singupPost;
module.exports.getProfile = getProfile;
