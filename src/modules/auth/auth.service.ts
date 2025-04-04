import { JwtService } from '@config/jwt/jwt';
import { ApiResponse } from '@config/response/api.response';
import { ILoginDTO } from '@modules/auth/auth.types';
import { UserModel } from '@modules/user/user.model';
import bcrypt from 'bcrypt';

export class AuthService {
	private jwt!: JwtService;

	constructor() {
		this.jwt = new JwtService();
	}

	async login({ email, password }: ILoginDTO) {
		const user = await UserModel.findOne({ email });

		if (!user) {
			const response: ApiResponse = {
				code: 406,
				status: false,
				message: 'Credenciales inválidas',
				data: null,
			};

			return response;
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			const response: ApiResponse = {
				code: 406,
				status: false,
				message: 'Credenciales inválidas',
				data: null,
			};

			return response;
		}

		const token = this.jwt.sign({
			id: user._id,
			email: user.email,
			name: user.name,
		});
		const response: ApiResponse = {
			code: 200,
			status: true,
			message: 'Inicio de sesión exitoso',
			data: {
				token,
			},
		};

		return response;
	}
}
