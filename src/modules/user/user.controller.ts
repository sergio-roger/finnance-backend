import { UserService } from '@modules/user/user.service';
import { Request, Response } from 'express';

const userService = new UserService();
export class UserController {
	public async getAllUsers(req: Request, res: Response): Promise<void> {
		try {
			const result = await userService.getAllUsers();
			res.status(result.code).json(result);
		} catch (error) {
			res.status(500).json({ error: 'Error al obtener usuarios' });
		}
	}

	public async getUserById(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			const result = await userService.getUserById(id);
			res.status(result.code).json(result);
		} catch (error) {
			res.status(500).json({ error: 'Error al obtener usuario' });
		}
	}

	public async createUser(req: Request, res: Response): Promise<void> {
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

	// Actualizar un usuario existente
	public async updateUser(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			const updates = req.body;
			// TODO: Lógica para actualizar usuario
			res.status(200).json({
				message: `updateUser - no implementado: ${id}`,
				data: updates,
			});
		} catch (error) {
			res.status(500).json({ error: 'Error al actualizar usuario' });
		}
	}

	// Eliminar un usuario
	public async deleteUser(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			// TODO: Lógica para eliminar usuario
			res.status(200).json({ message: `deleteUser - no implementado: ${id}` });
		} catch (error) {
			res.status(500).json({ error: 'Error al eliminar usuario' });
		}
	}
}
