const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');

const app = express();

console.log(process.env.EXPRESS_PORT);

// const port = process.env.EXPRESS_PORT || 3001;
const port = 80;

app.set('port', port);

sequelize
  .sync({ force: false })
  .then(() => console.log('데이터베이스 연결 성공'))
  .catch((err) => console.log(err));

const main = require('./route/main');
const account = require('./route/account');
const board = require('./route/board');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', main);
app.use('/account', account);
app.use('/board', board);

app.listen(port, () => console.log(`Port ${port} is running ..,`));
