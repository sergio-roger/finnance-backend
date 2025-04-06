export const userSwaggerDocs = {
	paths: {
		'/users': {
			get: {
				tags: ['Users'],
				summary: 'Obtener todos los usuarios',
				responses: {
					200: {
						description: 'Lista de usuarios obtenida correctamente',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										code: { type: 'integer', example: 200 },
										status: { type: 'boolean', example: true },
										data: {
											type: 'array',
											items: { $ref: '#/components/schemas/User' },
										},
									},
								},
							},
						},
					},
				},
			},
		},

		'/users/{id}': {
			get: {
				tags: ['Users'],
				summary: 'Obtener un usuario por ID',
				parameters: [
					{
						name: 'id',
						in: 'path',
						required: true,
						description: 'ID del usuario a buscar',
						schema: {
							type: 'string',
							example: '65fc123456abcdef12345678',
						},
					},
				],
				responses: {
					200: {
						description: 'Usuario encontrado',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										code: { type: 'integer', example: 200 },
										status: { type: 'boolean', example: true },
										data: {
											type: 'array',
											items: { $ref: '#/components/schemas/User' },
										},
									},
								},
							},
						},
					},
					407: {
						description: 'Usuario no encontrado',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										code: { type: 'integer', example: 407 },
										status: { type: 'boolean', example: false },
										data: {
											type: 'array',
											example: [],
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

	components: {
		schemas: {
			User: {
				type: 'object',
				properties: {
					_id: { type: 'string', example: '65fc123456abcdef12345678' },
					name: { type: 'string', example: 'Juan Pérez' },
					email: { type: 'string', example: 'juan@example.com' },
					createdAt: { type: 'string', format: 'date-time' },
					updatedAt: { type: 'string', format: 'date-time' },
				},
			},
		},
	},
};
