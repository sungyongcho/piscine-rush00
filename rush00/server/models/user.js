const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            username: {                         // username : 255자 아내, 필수, 고유한 값
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            password: {                         // password : 255자 이내, 필수
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            email: {                            // email : 255자 이내, 필수
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        }, {
            sequelize,                  // model/index.js 와 연결을 위한 옵션
            timestamps: false,          // 생성될 때와 수정될 때의 시간이 자동입력 하지만 created_at 생성했으니 필요 x
            underscored: false,         // Sequelize는 기본적으로 컬럼명을 캐멀 케이스로 바꾸지만 스네이크 케이스로 변경하기 위한 옵션
            modelName: 'User',          // 모델 이름 설정
            tableName: 'users',         // 테이블 이름 설정
            paranoid: false,            // row를 삭제할 때 복원하기 위한 옵션
            charset: 'utf8',            // 한글을 사용하기 위한 옵션 이모티콘은 utf8mb4와 utf8mb4_general_ci 옵션을 추가해야 한다.
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
    }
};
