import { AboutSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class AboutValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AboutSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AboutSchema.addBlok, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AboutSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AboutSchema.delByIdSchema, next);
  }
}

export default AboutValidation;
