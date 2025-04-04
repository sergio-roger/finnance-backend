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
              required: ['name', 'email', 'password'],
              properties: {
                name: { type: 'string', example: 'Juan Pérez' },
                email: { type: 'string', example: 'juan@example.com' },
                password: { type: 'string', example: '123456' },
              },
            },
          },
        },
      },
      responses: {
        201: { description: 'Usuario creado correctamente' },
        400: { description: 'Error al crear usuario' },
      },
    },
  },
};
