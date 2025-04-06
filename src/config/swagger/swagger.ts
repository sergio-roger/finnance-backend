import { authSwaggerDocs } from '@docs/auth.swagger';
import { userSwaggerDocs } from '@docs/user.swagger';

const baseDoc = {
	openapi: '3.0.0',
	info: {
		title: 'Control de Finanzas - API',
		version: '1.0.0',
		description: 'Documentación de la API para el control de finanzas personales',
	},
	servers: [
		{
			url: 'http://localhost:6900/api/v1',
		},
	],
	paths: {
		...userSwaggerDocs.paths,
		...authSwaggerDocs.paths,
	},
	components: {
		schemas: {
			...userSwaggerDocs.components.schemas,
		},
	},
};

export const swaggerSpec = baseDoc;
