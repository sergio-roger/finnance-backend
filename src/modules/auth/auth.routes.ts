import { AuthController } from '@modules/auth/auth.controller';
import { Router } from 'express';
import { authValidationMiddleware } from './auth.middlewares';
import { authValidations } from './auth.validations';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/login', authController.login);
authRoutes.post('/register', authValidationMiddleware(authValidations), authController.register);

export { authRoutes };
