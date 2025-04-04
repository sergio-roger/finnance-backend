import { AuthService } from '@modules/auth/auth.service';
import { ILoginDTO } from '@modules/auth/auth.types';
import { Request, Response } from 'express';

const authService = new AuthService();

export class AuthController {
	async login(req: Request, res: Response): Promise<void> {
		try {
			const user: ILoginDTO = req.body;
			const response = await authService.login(user);
			res.status(response.code).json(response);
		} catch (error) {
			res.status(401).json({ error: (error as Error).message });
		}
	}
}
