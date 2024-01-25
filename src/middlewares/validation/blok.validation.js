import { BlokSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class BlokValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, BlokSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, BlokSchema.addBlok, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, BlokSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, BlokSchema.delByIdSchema, next);
  }
}

export default BlokValidation;
