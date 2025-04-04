import jwt, { JwtPayload } from 'jsonwebtoken';
import { StringValue } from 'ms';

export class JwtService {
	private secret: jwt.Secret;
	private expiresIn: StringValue = '2h';

	constructor() {
		this.secret = process.env.JWT_SECRET || 'default_secret';
	}

	public sign(payload: object): string {
		return jwt.sign(payload, this.secret, {
			expiresIn: this.expiresIn,
		});
	}

	public verify<T = JwtPayload>(token: string): T {
		return jwt.verify(token, this.secret) as T;
	}
}
