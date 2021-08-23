const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../../models');

const loginPost = (req, res) => {
  const info = req.body;

  const userData = User.findAll({
    attributes: ['username', 'password'],
    where: {
      username: username
    }
  });
};

const singupPost = (req, res) => {
  const info = req.body;

  const hashPassword = bcrypt.hashSync(info.password, 10);

  User.create({
    username: info.username,
    password: hashPassword,
    email: info.email,
  }).then(() => {
    alert('회원가입을 축하드립니다.');
  });
};

module.exports.loginPost = loginPost;
module.exports.singupPost = singupPost;
