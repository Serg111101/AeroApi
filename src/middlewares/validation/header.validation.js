import { HeaderSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class HeaderValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, HeaderSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, HeaderSchema.headerSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, HeaderSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, HeaderSchema.delByIdSchema, next);
  }
}

export default HeaderValidation;
