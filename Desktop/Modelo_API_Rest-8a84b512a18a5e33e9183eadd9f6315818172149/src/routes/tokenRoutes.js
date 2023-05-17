// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
