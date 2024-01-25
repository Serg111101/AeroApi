import { OurTeamSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class OurTeamValidation {
  static validateGetArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, OurTeamSchema.getSchema, next);
  }
}

export default OurTeamValidation;
