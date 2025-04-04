import { AuthController } from '@modules/auth/auth.controller';
import { Router } from 'express';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/login', authController.login);

export { authRoutes };
