import { IUser } from '@modules/user/user.types';
import mongoose, { Document, Schema } from 'mongoose';

export interface IUserDocument extends IUser, Document {}

const UserSchema: Schema = new Schema<IUserDocument>(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
		},
	},
	{ timestamps: true, versionKey: false },
);

export const UserModel = mongoose.model<IUserDocument>('users', UserSchema);
