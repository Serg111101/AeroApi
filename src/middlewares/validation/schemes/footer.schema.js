import Joi from 'joi';
import { ID } from './type';

const FooterSchema = {
  footerSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    }),
    body: Joi.object({
      title: Joi.string().min(2),
      text: Joi.string().min(2),
      logo: Joi.string().min(2)

    })
  },

  delByIdSchema: {
    params: Joi.object({
      id: ID.required(),
      lang: Joi.string().regex(/^(AM|US|RU)$/).required()
    })
  },

  editSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/).required(),
      id: ID.required()
    }),
    body: Joi.object({
      title: Joi.string().min(2),
      text: Joi.string().min(2),
      logo: Joi.string().min(2)

    })
  },

  getSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    })
  }

};
export default FooterSchema;
