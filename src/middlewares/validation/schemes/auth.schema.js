// NPM modules
import Joi from 'joi';

const AuthSchema = {
  loginSchema: {
    body: Joi.object({
      password: Joi.string().min(3).required(),
      login: Joi.string().min(5).required()
    })
  }
};

export default AuthSchema;
