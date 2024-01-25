import { SatelliteQuizSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class SatelliteQuizValidation {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SatelliteQuizSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SatelliteQuizSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SatelliteQuizSchema.delByIdSchema, next);
  }
}

export default SatelliteQuizValidation;
