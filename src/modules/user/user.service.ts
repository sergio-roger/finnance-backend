import { ApiResponse } from '@config/response/api.response';
import { UserModel } from '@modules/user/user.model';
import { UserPromise, UserResponse } from '@modules/user/user.reponse';
import { IUser } from '@modules/user/user.types';
import bcrypt from 'bcrypt';

export class UserService {
	async getAllUsers(): Promise<ApiResponse<IUser[]>> {
		const users = await UserModel.find({}, { password: 0 });

		return {
			code: 200,
			status: true,
			message: 'Usuarios encontrados',
			data: users,
		};
	}

	async getUserById(id: string): Promise<ApiResponse<IUser[]>> {
		const user = await UserModel.findById(id, { password: 0 });

		if (!user) {
			return {
				code: 407,
				status: false,
				message: 'Usuario no encontrado :(',
				data: [],
			};
		}

		return {
			code: 200,
			status: true,
			message: 'Ususrio existente',
			data: [user],
		};
	}

	async createUser(userData: IUser): UserPromise {
		const userExists = await UserModel.findOne({ email: userData.email });

		if (userExists) {
			const response: UserResponse = {
				code: 401,
				status: false,
				message: 'Email ya se encuentra registrado',
				data: [],
			};

			return response;
		}

		const hashedPassword = await bcrypt.hash(userData.password, 10);

		const newUser = new UserModel({
			...userData,
			password: hashedPassword,
		});
		const user = await newUser.save();

		const response: UserResponse = {
			code: 201,
			status: true,
			message: 'Usuario creado',
			data: [
				{
					_id: user._id,
				},
			],
		};

		return response;
	}
}
