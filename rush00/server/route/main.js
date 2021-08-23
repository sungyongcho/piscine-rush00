const express = require('express');

const router = express.Router();

let favorite;

router
  .get('', (req, res) => {
    res.send('gogo');
  })
  .post('', async (req, res) => {
    favorite = req.body.favorite;
    res.cookie('favorite', favorite);
    console.log(favorite);
    console.log(`cookie ${req.cookies}`);
    res.redirect('/');
  });

module.exports = router;
