// NPM modules
import Joi from 'joi';

const MailSchema = {
  mailSchema: {
    body: Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      text: Joi.string().min(3).required()
    })
  }
};

export default MailSchema;
