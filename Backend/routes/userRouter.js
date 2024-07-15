const route = require("express").Router();

const{ createUser, getAllUser, deleteUser, updateUser}= require("../controller/userController");

route.post("/createUser", createUser);
route.get("/getAllUser", getAllUser);
route.delete("/deleteUser", deleteUser);
route.patch("/updateUser", updateUser);

module.exports = route;