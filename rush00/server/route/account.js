const express = require('express');

const router = express.Router();
const auth = require('./data/auth');

router
  .get('/login')
  .post('/login', auth.loginPost)
  .post('/signup', auth.singupPost)
  .get('/logout')
  .get('/signup')

module.exports = router;
