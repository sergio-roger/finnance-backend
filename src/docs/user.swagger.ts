export const userSwaggerDocs = {
	'/users': {
		post: {
			tags: ['Users'],
			summary: 'Crear un nuevo usuario',
			requestBody: {
				required: true,
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
										name: { type: 'string', example: 'Juan Pérez' },
										email: { type: 'string', example: 'juan@example.com' },
										password: { type: 'string', example: '123456' },
									},
								},
							},
						},
					},
				},
			},
			responses: {
				201: {
					description: 'Usuario creado correctamente',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									code: { type: 'integer', example: 201 },
									status: { type: 'boolean', example: false },
									data: {
										type: 'object',
										properties: {
											email: { type: 'string', example: 'juan@example.com' },
											password: { type: 'string', example: 'asdfg4566' },
										},
									},
								},
							},
						},
					},
				},
				401: {
					description: 'Email ya se encuentra registrado',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									code: { type: 'integer', example: 400 },
									status: { type: 'boolean', example: false },
									data: {
										type: 'null',
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
