const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
const cars = require("./definitions/cars");
const bookings = require("./definitions/bookings");


const models = { users , cars, bookings };

//Relations
users.hasMany(bookings, { foreignKey: "userId"});
bookings.belongsTo(users, { foreignKey: "userId"});

cars.hasMany(bookings, { foreignKey: "carId"});
bookings.belongsTo(cars, { foreignKey: "carId"});


const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};