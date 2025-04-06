import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';
import { AuthErrorValidation } from './auth.types';

const authValidationMiddleware =
	(schema: ZodSchema) =>
	(req: Request, res: Response, next: NextFunction): Promise<void> => {
		return new Promise((resolve, reject) => {
			try {
				schema.parse(req.body);
        resolve();
				next();
			} catch (error: unknown) {
				const errros = error as AuthErrorValidation;
        reject();
				return res.status(400).json({
					code: 400,
					status: false,
					errors: errros.issues,
				});
			}
		});
	};

export { authValidationMiddleware };
