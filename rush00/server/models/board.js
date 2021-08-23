// const Sequelize = require('sequelize');

// module.exports = class Board extends Sequelize.Model {
//     static init(sequelize) {
//         return super.init({
//             title: {
//                 type: Sequelize.STRING(255),
//                 allowNull: false,
//             },
//             content: {
//                 type: Sequelize.TEXT,
//                 allowNull: false,
//             },
//             created_at: {
//                 type: Sequelize.DATE,
//                 allowNull: false,
//                 defaultValue: Sequelize.NOW,
//             },
//             updated_at: {
//                 type: Sequelize.DATE,
//                 allowNull: true,
//                 defaultValue: Sequelize.NOW,
//             },
//         }, {
//             sequelize,
//             timestamps: false,
//             modelName: 'Comment',
//             tableName: 'comments',
//             paranoid: false,
//             charset: 'utf8mb4',
//             collate: 'utf8mb4_general_ci',
//         });
//     }

//     static associate(db) {
//         db.Board.belongsTo(db.User, { foreignKey: 'boarder', targetKey: 'id' });
//     }
// };