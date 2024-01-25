import Joi from 'joi';
// import { ID } from './type';

const PartnersSchema = {
  getSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    })
  }

};
export default PartnersSchema;
