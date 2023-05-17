/* eslint-disable import/no-extraneous-dependencies */
import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Picture from '../models/Picture';

const models = [Aluno, User, Picture];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
