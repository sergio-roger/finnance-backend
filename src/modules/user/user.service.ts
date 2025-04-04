import { ApiResponse } from '@config/response/api.response';
import { UserModel } from '@modules/user/user.model';
import { IUser } from '@modules/user/user.types';
import bcrypt from 'bcrypt';

export class UserService {
	async createUser(userData: IUser) {
		const userExists = await UserModel.findOne({ email: userData.email });

		if (userExists) {
			const response: ApiResponse = {
				code: 401,
				status: false,
				message: 'Email ya se encuentra registrado',
				data: null,
			};

			return response;
		}

		const hashedPassword = await bcrypt.hash(userData.password, 10);

		const newUser = new UserModel({
			...userData,
			password: hashedPassword,
		});
		const user = await newUser.save();

		const response: ApiResponse = {
			code: 201,
			status: true,
			message: 'Usuario creado',
			data: {
				_id: user._id,
			},
		};

		return response;
	}
}
