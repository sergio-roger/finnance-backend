import { Router } from 'express';
import { UserController } from '@modules/user/user.controller';
import { authMiddleware } from '@middlewares/auth.middleware';

const userRoutes = Router();
const userController = new UserController();

//Api for admins
userRoutes.get('/admin', authMiddleware, userController.getAllUsers);
userRoutes.post('/admin', authMiddleware, userController.createUser);
userRoutes.put('/admin/:id', authMiddleware, userController.updateUser);
userRoutes.delete('/admin/:id', authMiddleware, userController.deleteUser);

// Api for users
userRoutes.get('/:id', authMiddleware, userController.getUserById);

export { userRoutes };
