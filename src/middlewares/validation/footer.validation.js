import { FooterSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class FooterValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FooterSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FooterSchema.footerSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FooterSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FooterSchema.delByIdSchema, next);
  }
}

export default FooterValidation;
