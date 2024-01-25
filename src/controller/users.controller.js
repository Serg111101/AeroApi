// Local Modules
import { UsersServices } from '../services';
import { SuccessHandlerUtil } from '../utils';
// import ClientsManager from '../socket/clients-manager';

export default class UsersController {
  static async get(req, res, next) {
    try {
      SuccessHandlerUtil.handleList(res, next, { });
    } catch (error) {
      next(error);
    }
  }
}
