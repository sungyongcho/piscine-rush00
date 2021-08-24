const express = require('express');

const router = express.Router();
const auth = require('./data/auth');

router
  .get('/login', (req, res) => {
  })
  .post('/login', auth.loginPost)
  .post('/signup', auth.singupPost)
  .get('/logout', auth.logoutGet);

module.exports = router;
