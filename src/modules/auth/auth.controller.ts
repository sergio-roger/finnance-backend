import { AuthService } from '@modules/auth/auth.service';
import { ILoginDTO } from '@modules/auth/auth.types';
import { UserService } from '@modules/user/user.service';
import { Request, Response } from 'express';

const authService = new AuthService();
const userService = new UserService();

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

	async register(req: Request, res: Response): Promise<void> {
		try {
			const user = req.body;
			const response = await userService.createUser(user);

			res.status(response.code).json(response);
		} catch (error) {
			res.status(500).json({
				code: 510,
				status: false,
				error: 'Error al crear usuario',
			});
		}
	}
}
