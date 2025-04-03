import { ResponseType } from '@config/types/response.type';
import { UserModel } from '@modules/user/user.model';
import { IUser } from '@modules/user/user.types';

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

    const newUser = new UserModel(userData);
    const user = await newUser.save();
    const resppnse: ResponseType = {
      code: 201,
      status: true,
      message: 'Usuario creado',
      data: user,
    };

    return resppnse;
  }
}
