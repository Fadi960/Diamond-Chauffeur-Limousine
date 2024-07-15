const carModel = require("../model/carModel");
const { v4: uuid } = require("uuid");
const { 
        createCar,
        getAllCar,
        deleteCar,
        updateCar
} = require("../controller/carController");
const { models } = require("../model/index");

module.exports = {
    createCar: async (body) => {
        try {
            body.carId = uuid();

            const car = await carModel.createCar(body);

            if (car.error) {
                return {
                    error: car.error,
                };
            }
            return {
                response: car.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },


    getAllCar: async () => {
        try {
            const car = await carModel.getAllCar();
            if (car.error) {
                return {
                    error: car.error,
                };
            }
            return {
                response: car.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    deleteCar: async (carId) => {
        try {
            const deleteCar = await carModel.deleteCar(carId);
            if (deleteCar.error || !deleteCar.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteCar?.error || deleteCar.response,
                    },
                };
            }
            return {
                response: {
                    message: "Car is deleted!",
                    response: deleteCar.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    updateCar: async (body) => {
        try {
            const updateCar = await carModel.updateCar(body);
            if (updateCar.error || !updateCar.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateCar?.error || updateCar.response,
                    },
                };
            }

            const car = await carModel.findCarById(body.carId);

            console.log(car);
            if (car.error) {
                return {
                    error: {
                        message: "unable to find car after successful update!!!",
                        error: car?.error || car.response,
                    },
                };
            }
            return {
                response: {
                    message: "Car is updated",
                    response: car.dataValues,
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