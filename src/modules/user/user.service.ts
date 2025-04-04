import { ResponseType } from '@config/types/response.type';
import { IUserDocument, UserModel } from '@modules/user/user.model';
import { IUser } from '@modules/user/user.types';
import bcrypt from 'bcrypt';

export class UserService {
  async createUser(userData: IUser) {
    const userExists = await UserModel.findOne({ email: userData.email });

    if (userExists) {
      const response: ResponseType = {
        code: 401,
        status: false,
        message: 'El usuario ya existe',
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
    
    const response: ResponseType = {
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
