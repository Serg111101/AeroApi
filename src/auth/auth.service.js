import jwt from 'jsonwebtoken';
import { adminModel } from '../models';
import { ErrorsUtil, CryptoUtil } from '../utils';

import config from '../config/variables.config';

const { AUTH } = config;

const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_ACTIVE_TIME,
  REFRESH_TOKEN_ACTIVE_TIME

} = AUTH;

const { InputValidationError, UnauthorizedError } = ErrorsUtil;

export default class AuthService {
  static generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET,{
      expiresIn: ACCESS_TOKEN_ACTIVE_TIME
    });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET,{
      expiresIn: REFRESH_TOKEN_ACTIVE_TIME
    });

    return { accessToken, refreshToken };
  }

  static validateAccessToken(accessToken) {
    try {
      return jwt.verify(accessToken, JWT_ACCESS_SECRET, ACCESS_TOKEN_ACTIVE_TIME);
    } catch (error) {
      throw new UnauthorizedError(222);
    }
  }

  static validateRefreshToken(refreshToken) {
    try {
      return jwt.verify(refreshToken, JWT_REFRESH_SECRET,REFRESH_TOKEN_ACTIVE_TIME);
    } catch (error) {
      throw new UnauthorizedError(333);
    }
  }

  static async refresh(token) {
    const user = AuthService.validateRefreshToken(token);

    delete user.iat,
    delete user.exp
    const { accessToken, refreshToken } = AuthService.generateTokens(user);
    const payload = {
      accessToken,
      refreshToken,
      ...user
    };
    return payload;
  }

  static async login(email, password) {
    const user = await adminModel.getLogin(email);
    console.log(user,"user");
    if (!user) throw new InputValidationError('Invalid email or password');
    if (!CryptoUtil.isValidPassword(password, user.password)) {
      throw new InputValidationError('Invalid email or password');
    }

    delete user.password;
    const { accessToken, refreshToken } = AuthService.generateTokens({ ...user });

    const payload = {
      ...user,
      accessToken,
      refreshToken

    };
    return payload;
  }
}
