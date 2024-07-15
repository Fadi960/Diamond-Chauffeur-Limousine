const route = require("express").Router();

const{ createBooking, getAllBooking, deleteBooking, updateBooking}= require("../controller/bookingController");

route.post("/createBooking", createBooking);
route.get("/getAllBooking", getAllBooking);
route.delete("/deleteBooking", deleteBooking);
route.patch("/updateBooking", updateBooking);

module.exports = route;