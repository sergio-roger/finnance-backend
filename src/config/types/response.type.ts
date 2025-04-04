export interface ResponseType<T = unknown> {
	code: number;
	data?: T;
	message: string;
	status: boolean;
}
