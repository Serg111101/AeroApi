import Joi from 'joi';
import { ID } from './type';

const SatelliteSchema = {
  addSchema: {
    params: Joi.object({
      lang: Joi.string().valid('AM', 'US', 'RU'),
    }),
    body: Joi.object({
        title: Joi.string(),
        text1: Joi.array().items(Joi.string()),
        animationCubeSat1: Joi.string(),
        text2: Joi.array().items(Joi.string()),
        margin_text1: Joi.array().items(Joi.string()),
        animationCubeSat2: Joi.string(),
        text3: Joi.array().items(Joi.string()),
        margin_text2: Joi.array().items(Joi.string()),
        text4: Joi.array().items(Joi.string()),
        margin_text3: Joi.array().items(Joi.string()),
        animationCubeSat3: Joi.string(),
        text5: Joi.array().items(Joi.string()),
        animationCubeSat4: Joi.string(),
        background: Joi.string(),
        margin_text4: Joi.array().items(Joi.string()),
      })
  },

  editSchema: {
    params: Joi.object({
      lang: Joi.string(),
      id: ID.required()
    }),
    body: Joi.object({
        title: Joi.string(),
        text1: Joi.array().items(Joi.string()),
        animationCubeSat1: Joi.string(),
        text2: Joi.array().items(Joi.string()),
        margin_text1: Joi.array().items(Joi.string()),
        animationCubeSat2: Joi.string(),
        text3: Joi.array().items(Joi.string()),
        margin_text2: Joi.array().items(Joi.string()),
        text4: Joi.array().items(Joi.string()),
        margin_text3: Joi.array().items(Joi.string()),
        animationCubeSat3: Joi.string(),
        text5: Joi.array().items(Joi.string()),
        animationCubeSat4: Joi.string(),
        background: Joi.string(),
        margin_text4: Joi.array().items(Joi.string()),
      })
  },

    delByIdSchema: {
      params: Joi.object({
        lang: Joi.string(),
        id: ID.required(),
        key: Joi.string().min(1).required(),
        index: Joi.number()
      })
    }

};

export default SatelliteSchema;
