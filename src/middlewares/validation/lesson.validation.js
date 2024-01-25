import { LessonSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class AboutValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, LessonSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, LessonSchema.addBlok, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, LessonSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, LessonSchema.delByIdSchema, next);
  }
}

export default AboutValidation;
