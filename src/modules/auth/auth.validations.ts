import { z } from 'zod';

export const authValidations = z.object({
	name: z
		.string({
			required_error: 'El nombre es obligatorio',
		})
		.min(3, 'El nombre debe tener al menos 3 caracteres'),

	email: z
		.string({
			required_error: 'El correo electrónico es obligatorio',
		})
		.email('Correo electrónico no válido'),

	password: z
		.string({
			required_error: 'La contraseña es obligatoria',
		})
		.min(8, 'La contraseña debe tener al menos 8 caracteres'),
});
