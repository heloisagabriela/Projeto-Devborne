import { Secret, sign } from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import authConfig from '../../config/auth'

interface IRequest {
  authKey: string;
}

export default class AuthenticateService {
  public execute({ authKey }: IRequest) {

    if (authKey !== process.env.AuthKey) {
      throw new AppError('Invalid Auth Key!');
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret as Secret, {
      expiresIn,
    });

    return { token };
  }
}