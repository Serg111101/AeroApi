import { PartnersSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class PartnersValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, PartnersSchema.getSchema, next);
  }
}

export default PartnersValidation;
