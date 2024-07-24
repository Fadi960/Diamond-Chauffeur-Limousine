const { models } = require("./index");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  createUser: async (body) => {
    try {
      if (body.password) {
        body.password = await bcrypt.hash(body.password, saltRounds);
      }
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.log("error from model", error);
      return {
        error: error,
      };
    }
  },
  findByUserName : async(userName) => {
    try{
        const user = await models.users.findOne({where:{ userName: userName}});
        return{
            response: user,
        }
    }catch(error){
      console.log("error from model",error);
        return{
            error: error,
        };
    }
},

  getAllUser: async () => {
    try {
      const user = await models.users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser: async (userId) => {
    try {
      const deleteUser = await models.users.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: deleteUser,
      };
    } catch (error) {
      console.log("error from model", error);
      return {
        error: error,
      };
    }
  },

  updateUser: async ({ userId, ...body }) => {
    try {
      if (body.password) {
        body.password = await bcrypt.hash(body.password, saltRounds);
      }
      const updateUser = await models.users.update({ ...body }, {
        where: {
          userId: userId,
        },
      });
      return {
        response: updateUser,
      };
    } catch (error) {
      console.log("error from model", error);
      return {
        error: error,
      };
    }
  },
  resetPassword: async ({ email, ...body }) => {
    try {
      if (body.password) {
        body.password = await bcrypt.hash(body.password, saltRounds);
      }
      const resetPassword = await models.users.update({ ...body }, {
        where: {
          email: email,
        },
      });
      return {
        response: resetPassword,
      };
    } catch (error) {
      console.log("error from model", error);
      return {
        error: error,
      };
    }
  },
};
