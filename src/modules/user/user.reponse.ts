import { ApiResponse } from '@config/response/api.response';
import { IUser } from '@modules/user/user.types';

export type UserPartial = Partial<IUser | unknown>;

export type UserResponse = ApiResponse<UserPartial[]>;

export type UserPromise = Promise<UserResponse>;
