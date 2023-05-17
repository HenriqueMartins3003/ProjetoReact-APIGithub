"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

 class Picture extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 200],
            msg: 'O campo originalname não pode ser vazio',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 200],
            msg: 'O campo filename não pode ser vazio',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/uploads/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'pictures',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
} exports.default = Picture;
