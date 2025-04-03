import { Router } from 'express';
import { UserController } from '@modules/user/user.controller';

const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/', userController.getAllUsers);
userRoutes.get('/:id', userController.getUserById);
userRoutes.post('/', userController.createUser);
userRoutes.put('/:id', userController.updateUser);
userRoutes.delete('/:id', userController.deleteUser);

export { userRoutes };