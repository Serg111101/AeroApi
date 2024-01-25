import Joi from 'joi';
import { ID } from './type';

const HeaderSchema = {
  headerSchema: {
    body: Joi.object({
      title: Joi.string().min(2).required()
    })
  },

  delByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required(),
      lang:Joi.string().valid('AM', 'US', 'RU').required(),
    }),
    body: Joi.object({
      title: Joi.string().min(2).required()

    })

  },

  getSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    })
  }

};
export default HeaderSchema;
