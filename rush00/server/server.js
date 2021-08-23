const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// require('dotenv').config();

// const port = process.env.EXPRESS_PORT || 3001;
// app.set('port', port);

const port = 80; // 나중에 환경변수 포트로 변경 필요

const main = require('./route/main');
const account = require('./route/account');
const board = require('./route/board');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/', main);
app.use('/account', account);
app.use('/board', board);

app.listen(port, () => console.log(`Port ${port} is running ..,`));