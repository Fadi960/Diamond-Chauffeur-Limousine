const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

const registerSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

const resetPasswordSchema = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);

      if (login.error) {
        return res.send({
          error: login.error,
        });
      }

      res.cookie("auth", login.response.token, {
        maxAge: 30000,
      });
      return res.send({
        response: login.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  register: async (req, res) => {
    try {
      console.log(req.body);
      const validate = await registerSchema.validateAsync(req.body);
      const register = await authService.register(validate);

      if (register.error) {
        return res.status(400).send({
          error: register.error,
        });
      }

      return res.send({
        response: register.response,
      });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  },

  logout: async (req, res) => {
    try {
      res.cookie("auth", "", {
        maxAge: 0,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      });
      return res.send({
        message: "Logged out successfully",
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  resetPassword: async (req,res) => {
    try {
      const validate = await resetPasswordSchema.validateAsync(req.body);
      const resetPassword = await authService.resetPassword(validate);
      if (resetPassword.error) {
          return res.send({ error: resetPassword.error });
      }
      console.log("Console log from reset password", resetPassword.response);
      return res.send({ response: resetPassword.response });
  } catch (error) {
      console.log("error from controller", error);
      return res.send({ error: error, });
  }
},
};
