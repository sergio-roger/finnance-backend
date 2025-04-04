export const authSwaggerDocs = {
	'/auth/login': {
		post: {
			tags: ['Auth'],
			summary: 'Inicia sesión con email y password',
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['email', 'password'],
							properties: {
								email: {
									type: 'string',
									example: 'juan@example.com',
								},
								password: {
									type: 'string',
									example: '123456',
								},
							},
						},
					},
				},
			},
			responses: {
				200: {
					description: 'Inicio de sesión exitoso. Devuelve JWT y datos del usuario',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									code: {
										type: 'integer',
										example: 200,
									},
									status: {
										type: 'boolean',
										example: true,
									},
									data: {
										type: 'object',
										properties: {
											token: {
												type: 'string',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
										},
									},
								},
							},
						},
					},
				},
				406: {
					description: 'Credenciales inválidas',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									code: { type: 'integer', example: 406 },
									status: { type: 'boolean', example: false },
									data: {
										type: 'object',
										properties: {
											message: { type: 'string', example: 'Credenciales inválidas' },
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
};
