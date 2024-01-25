import Joi from 'joi';
import { ID } from './type';

const QuizSchema = {
  addBlok: {
    params:Joi.object({
      lang:Joi.string().valid('AM', 'US', 'RU').required(),
    }),
    body: Joi.object({
      lesson: Joi.string().min(2),
      question: Joi.string().min(2),
      lesson: Joi.string().min(2),
      correctAnswer: Joi.string().min(2),
      incorrectAnswer: Joi.array().items(Joi.string()).min(2),
      background: Joi.string().min(1)
    })
  },

  delByIdSchema: {
    params: Joi.object({
      lang:Joi.string().valid('AM', 'US', 'RU').required(),
      id: ID.required()
    })
  },

  editSchema: {
    params: Joi.object({
      lang:Joi.string().valid('AM', 'US', 'RU').required(),
      id: ID.required()
    }),
    body: Joi.object({
      lesson: Joi.string().min(2),
      question: Joi.string().min(2),
      correctAnswer: Joi.string().min(2),
      incorrectAnswer: Joi.string().min(2),
      background: Joi.string().min(1)
    })
  },

  getSchema: {
    params: Joi.object({
      lesson: Joi.string().min(0),
      lang: Joi.string().regex(/^(AM|US|RU)$/)

    })
  }

};
export default QuizSchema;
