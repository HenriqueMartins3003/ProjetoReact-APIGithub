// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middleware/loginRequire';

const router = new Router();

router.post('/', loginRequired, userController.create);
router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
