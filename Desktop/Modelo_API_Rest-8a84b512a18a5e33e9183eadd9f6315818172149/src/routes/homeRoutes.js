// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
