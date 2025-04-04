import { swaggerSpec } from '@config/swagger/swagger';
import { prefixRoute } from '@middlewares/prefix.middleware';
import { authRoutes } from '@modules/auth/auth.routes';
import { userRoutes } from '@modules/user/user.routes';
import { Application, Router } from 'express';
import swaggerUi from 'swagger-ui-express';

export function routes(app: Application): void {
	const router = Router();

	// Routes of modules
	router.use('/users', userRoutes);

	// Versioning
	app.use(prefixRoute('/api/v1', router));
	router.use('/auth', authRoutes);

	// Swagger UI
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
