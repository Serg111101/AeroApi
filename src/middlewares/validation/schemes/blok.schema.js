import Joi from 'joi';
// import { ID } from './type';

const BlokSchema = {

  addBlok: {
    params: Joi.object({
      lang: Joi.string().valid('AM', 'US', 'RU'),
      different: Joi.string().required()
    }),
    
    body: Joi.object({
      logo: Joi.string().min(2),
      index: Joi.number().min(0),
      title: Joi.string().min(2),
      text: Joi.string().min(2),
      color: Joi.string().min(1)
      
    }),

  },

  delByIdSchema: {
    query: Joi.object({
      arrIndex: Joi.number().min(0).max(4)
    }),
    params: Joi.object({
      lang: Joi.string().valid('AM', 'US', 'RU'),
      different: Joi.string().required(),
      index: Joi.number().min(0).max(4).required()
    })

  },

  editSchema: {
    params: Joi.object({
      lang: Joi.string().valid('AM', 'US', 'RU'),
      different: Joi.string().pattern(/^[^\d]+$/).required(),
      index: Joi.number().min(0).max(4).required(),
      id: Joi.number().integer()
    }),
    body: Joi.object({
      logo: Joi.alternatives().try(
        Joi.string().min(2),
        Joi.array()
      ),
      index:Joi.number().min(0),
      link: Joi.string().min(2),
      title: Joi.string().min(2),
      text: Joi.string().min(2),
      color: Joi.string().min(1),
      readmore: Joi.string().min(1)
    })

  },

  getSchema: {
    params: Joi.object({
      different: Joi.string().pattern(/^[^\d]+$/).required(),
      lang: Joi.string().regex(/^(AM|US|RU)$/)

    })
  }

};
export default BlokSchema;
