import Joi from "joi";
import { ID } from "./type";

const SatelliteQuizSchema = {
  addSchema: {
    params: Joi.object({
      lang: Joi.string().valid("AM", "US", "RU"),
    }),
    body: Joi.object({
      question: Joi.string(),
      incorrectAnswer: Joi.array().items(Joi.string()),
      lesson: Joi.string(),
      correctAnswer: Joi.string(),
    }),
  },

  editSchema: {
    params: Joi.object({
      lang: Joi.string().valid("AM", "US", "RU"),
      id: ID.required(),
    }),
    body: Joi.object({
      question: Joi.string(),
      incorrectAnswer: Joi.array().items(Joi.string()),
      lesson: Joi.string(),
      correctAnswer: Joi.string(),
      background: Joi.string(),
    }),
  },

  delByIdSchema: {
    params: Joi.object({
      lang: Joi.string().valid("AM", "US", "RU"),
      id: ID.required(),
    }),
  },
};

export default SatelliteQuizSchema;
