import Joi from 'joi';
import { ID } from './type';

const LessonSchema = {
  addBlok: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    }),
    body: Joi.object({
      icon: Joi.string().min(2),
      background: Joi.string().min(2),
      ikonka: Joi.string().min(2),
      lesson: Joi.string().min(1),
      color: Joi.string().min(1),
      lectures: Joi.string().min(1)

    })
  },

  delByIdSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/),
      id: ID.required(),
      lesson:Joi.string().min(1).required()
    })
  },

  editSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/),
      id: ID.required()
    }),
    body: Joi.object({
      id: ID.required(),
      icon: Joi.string(),
      background: Joi.string(),
      ikonka: Joi.string()||null||undefined,
      lesson: Joi.string(),
      color: Joi.string(),
      button:Joi.string(),
      lectures: Joi.array().items(
        Joi.object({
        color:Joi.string(),
        text:Joi.string(),
        
      })
      ),
    })
  },

  getSchema: {
    params: Joi.object({
      lectures:Joi.string().min(1),
      lang: Joi.string().regex(/^(AM|US|RU)$/)

    })
  }

};
export default LessonSchema;
