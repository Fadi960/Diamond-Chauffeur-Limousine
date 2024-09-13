
const users = require('../model/userModel');
const { v4: uuid } = require("uuid");
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const authService = {
  login: async (body) => {
    try {
      const isUser = await users.findByUserName(body.userName);
      if (isUser.error || !isUser.response) {
        return {
          error: {
            error: isUser?.error || isUser.response,
            message: "User Not Found!",
          },
        };
      }

      const isValid = await compare(
        body.password,
        isUser.response.dataValues.password
      );

      if (!isValid) {
        return {
          response: {
            token: "undefined",
            message: "invalid credentials",
          },
        };
      }

      delete isUser.response.dataValues.password;
      const token = sign(isUser.response.dataValues, process.env.SECRET, {
        expiresIn: 30, // Ensure that process.env.SECRET is defined
      });

      return {
        response: {
          token: token,
          message: "logged in successfully!",
        },
      };
    } catch (error) {
      console.log("error from service", error);
      return {
        error: error,
      };
    }
  },

  register: async (body) => {
    try {
      body.userId = uuid();
      const newUser = await users.createUser(body);

      return { response: newUser };
    } catch (error) {
        console.log("error from service",error);
      return { error: error.message };
    }
  },

  resetPassword: async (body) => {
    try {
      const resetPassword = await users.resetPassword(body);
      if (resetPassword.error || !resetPassword.response[0]){
        return {
          error: {
            message: "Error in resetpassword!",
            error: resetPassword?.error || resetPassword.response,
          },
        };
      }

      return {
        response: {
          message: "password is reset!",
          response: resetPassword.response,
        },
      };
    } catch (error) {
      console.log("Error from Service:", error);
      return { error: error };
    }
  },
};

module.exports = authService;
