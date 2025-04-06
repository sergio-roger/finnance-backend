import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@config/jwt/jwt';

const jwtService = new JwtService();

export function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
	const authHeader = req.headers.authorization;
	const promise = new Promise<void>((resolve, reject) => {
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res.status(401).json({
				code: 401,
				status: false,
				message: 'No tienes acceso a este recurso',
			});
		}

		const token = authHeader.split(' ')[1];

		try {
			const decoded = jwtService.verify(token);
			req.auth = decoded;

			next();
		} catch (error) {
			return res.status(410).json({
				code: 403,
				status: false,
				message: 'El token no es válido',
			});
		}
	});

	return promise;
}
