const userModel = require("../model/userModel");
const { v4: uuid } = require("uuid");
const { 
        createUser,
        getAllUser,
        deleteUser,
        updateUser
} = require("../controller/userController");
const { models } = require("../model/index");

module.exports = {
    createUser: async (body) => {
        try {
            body.userId = uuid();

            const user = await userModel.createUser(body);

            if (user.error) {
                return {
                    error: user.error,
                };
            }
            return {
                response: user.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },


    getAllUser: async () => {
        try {
            const user = await userModel.getAllUser();
            if (user.error) {
                return {
                    error: user.error,
                };
            }
            return {
                response: user.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    deleteUser: async (userId) => {
        try {
            const deleteUser = await userModel.deleteUser(userId);
            if (deleteUser.error || !deleteUser.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteUser?.error || deleteUser.response,
                    },
                };
            }
            return {
                response: {
                    message: "User is deleted!",
                    response: deleteUser.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    updateUser: async (body) => {
        try {
            const updateUser = await userModel.updateUser(body);
            if (updateUser.error || !updateUser.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateUser?.error || updateUser.response,
                    },
                };
            }
            return {
                response: {
                    message: "User is updated",
                    response: updateUser.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
};