/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Picture extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 200],
            msg: 'O campo originalname não pode ser vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 200],
            msg: 'O campo filename não pode ser vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/uploads/images/${this.getDataValue('filename')}`;
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
}
