const route = require("express").Router();

const{ createCar, getAllCar, deleteCar, updateCar}= require("../controller/carController");

route.post("/createCar", createCar);
route.get("/getAllCar", getAllCar);
route.delete("/deleteCar", deleteCar);
route.patch("/updateCar", updateCar);

module.exports = route;