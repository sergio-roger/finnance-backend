export const authSwaggerDocs = {
	paths: {
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
												message: {
													type: 'string',
													example: 'Credenciales inválidas',
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
		},
		'/auth/register': {
			post: {
				tags: ['Auth'],
				summary: 'Registrar un nuevo usuario',
				requestBody: {
					required: true,
					content: {
						'application/json': {
							schema: {
								type: 'object',
								required: ['name', 'email', 'password'],
								properties: {
									name: {
										type: 'string',
										example: 'Juan Pérez',
									},
									email: {
										type: 'string',
										example: 'juan@example.com',
									},
									password: {
										type: 'string',
										example: '12345678',
									},
								},
							},
						},
					},
				},
				responses: {
					201: {
						description: 'Usuario registrado correctamente',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										code: {
											type: 'integer',
											example: 201,
										},
										status: {
											type: 'boolean',
											example: true,
										},
										data: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													_id: {
														type: 'string',
														example: '67f15e8bb1f9f4d183e141c2',
													},
												},
											},
										},
									},
								},
							},
						},
					},
					405: {
						description: 'Email registrado previamente',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										code: {
											type: 'integer',
											example: 405,
										},
										status: {
											type: 'boolean',
											example: false,
										},
										message: {
											type:'string',
											example: 'Email ya se encuentra registrado',
										},
										data: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													message: {
														type: 'string',
														example: 'El usuario ya existe',
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
			},
		},
	},
};
