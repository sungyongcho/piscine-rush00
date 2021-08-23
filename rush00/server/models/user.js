const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          // username : 255자 아내, 필수, 고유한 값
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        password: {
          // password : 255자 이내, 필수
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        email: {
          // email : 255자 이내, 필수
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
      },
    );
  }
};
