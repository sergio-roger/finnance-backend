export interface ILoginDTO {
	email: string;
	password: string;
}

export interface AuthErrorValidation {
	issues: AuthItemError[];
	name: string;
}
export interface AuthItemError {
	code: string;
	expected: string;
	received: string;
	path: string[];
	message: string;
}
