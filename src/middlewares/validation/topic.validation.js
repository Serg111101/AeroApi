import { TopicSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class TopicValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, TopicSchema.getSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, TopicSchema.addBlok, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, TopicSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, TopicSchema.delByIdSchema, next);
  }
}

export default TopicValidation;
