import Joi from 'joi';
// import { ID } from './type';

const OurTeamSchema = {
  getSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    })
  }

};
export default OurTeamSchema;
