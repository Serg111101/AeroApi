import { SatelliteSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class SatelliteValidation {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SatelliteSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SatelliteSchema.editSchema, next);
  }

  static validateDelByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SatelliteSchema.delByIdSchema, next);
  }
}

export default SatelliteValidation;
