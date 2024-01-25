import Joi from 'joi';
import { ID } from './type';

const TopicSchema = {
  addBlok: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/).required(),
    }),
    body: Joi.object({
      lesson: Joi.string().min(2),
      lectures: Joi.string().min(2),
      text1: Joi.string().min(1),
      text2: Joi.string().min(1),
      text3: Joi.string().min(1),
      images: Joi.string().min(2),
      text_arr:Joi.array().items(Joi.string().min(1)),
      text_arr_margin:Joi.array().items(Joi.string().min(1)),
      slides: Joi.array().items(Joi.string()),
      button:Joi.array().items(Joi.string().min(1))

    })
  },

  delByIdSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/).required(),
      id: ID.required()
    })
  },

  editSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/).required(),
      id: ID.required()
    }),
    body: Joi.object({
      lesson: Joi.string(),
      lectures: Joi.string(),
      text1: Joi.string(),
      text2: Joi.string(),
      text3: Joi.string(),
      images: Joi.string(),
      text_arr:Joi.array().items(Joi.string()),
      text_arr_margin:Joi.array().items(Joi.string()),
      slides: Joi.array().items(Joi.string()),
      button:Joi.array().items(Joi.string())

    })
  },

  getSchema: {
    params: Joi.object({
      lesson: Joi.string().min(0),
      lang: Joi.string().regex(/^(AM|US|RU)$/)

    })
  }

};
export default TopicSchema;
