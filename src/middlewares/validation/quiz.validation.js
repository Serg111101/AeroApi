import { QuizSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class QuizValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, QuizSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, QuizSchema.addBlok, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, QuizSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, QuizSchema.delByIdSchema, next);
  }
}

export default QuizValidation;
