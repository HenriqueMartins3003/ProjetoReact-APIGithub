/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */
import dotEnv from 'dotenv';

dotEnv.config();
import './database';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import pictureRoutes from './routes/pictureRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/picture/', pictureRoutes);
  }
}
export default new App().app;
