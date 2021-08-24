const express = require('express');

const router = express.Router();
const auth = require('./data/auth');

router
  .post('/login', auth.loginPost)
  .post('/signup', auth.singupPost)
  .get('/logout', auth.logoutGet)
  .get('/profile', auth.getProfile);

module.exports = router;
