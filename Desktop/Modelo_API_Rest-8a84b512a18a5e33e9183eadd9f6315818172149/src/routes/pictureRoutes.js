/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { Router } from 'express';
import pictureController from '../controllers/PictureController';
import loginRequired from '../middleware/loginRequire';

const router = new Router();

router.post('/', loginRequired, pictureController.store);

export default router;
