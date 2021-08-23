const Sequelize = require('sequelize');
const User = require('./user');
const Board = require('./board');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const { post } = require('../route/main');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

User.init(sequelize);
Board.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Board.associate(db);
Comment.associate(db);

module.exports = db;