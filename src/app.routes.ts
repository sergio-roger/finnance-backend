import { Application, Router } from 'express';
import { userRoutes } from '@modules/user/user.routes';
import { prefixRoute } from '@middlewares/prefix.middleware';

export function routes(app: Application): void {
  const router = Router();

  router.use('/users', userRoutes);

  app.use(prefixRoute('/api/v1', router));
}