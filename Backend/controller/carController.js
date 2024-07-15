const { models } = require("../model");
const carService = require("../services/carService");
const joi = require("joi");

const createCarSchema = joi.object().keys({
    brand: joi.string().required(),
    model: joi.string().required(),
    year: joi.number().integer().min(2000).required(),
    description: joi.string().min(3).max(1000).required(),
    seats: joi.string().required(),
    status: joi.string().required(),
    gearType: joi.string().required(),
    fuelType: joi.string().required(),
});
const deleteCarSchema = joi.object().keys({
    carId: joi.string().min(3).max(255),
});
const updateCarSchema = joi.object().keys({
    carId: joi.string().min(3).max(255).required(),
    brand: joi.string().min(3).max(255).optional(),
    model: joi.string().min(3).max(500).optional(),
    year: joi.number().integer().min(2000).optional(),
    description: joi.string().min(3).max(1000).optional(),
    seats: joi.string().optional(),
    status: joi.string().valid('published', 'inactive', 'scheduled', 'pending').optional(),
    gearType: joi.string().valid('automatic', 'manual').optional(),
    fuelType: joi.string().valid('petrol', 'diesel', 'electric', 'hybrid').optional(),
});

module.exports ={
    createCar: async (req, res) => {
        try{
            const validate = await createCarSchema.validateAsync(req.body);
            const car = await carService.createCar(validate);

            if(car.error){
                return res.send({
                    error: car.error,
                });
            }
            return res.send({
                response: car.response,
            });
        }catch(error){
            console.log("error from controller",error);
            return res.send({
                error: error,
            });
        }
    },

    getAllCar: async(req,res)=>{
        try{
            const car = await carService.getAllCar();
            if(car.error){
                return res.send({
                    error: car.error,
                });
        }
        return res.send({
            response: car.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},
deleteCar: async (req, res) => {
    try {
        const validate = await deleteCarSchema.validateAsync(req.query);
        const deleteCar = await carService.deleteCar(validate.carId);

        if (deleteCar.error) {
            return res.send({ error: deleteCar.error });
        }
        return res.send({ response: deleteCar.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
},
  updateCar: async (req,res) => {
    try{
        const validate = await updateCarSchema.validateAsync(req.body);
        const updateCar = await carService.updateCar(validate);
        if (updateCar.error) {
            return res.send({ error: updateCar.error });
        }
        console.log("Console log from update car",updateCar.response);
        return res.send({ response: updateCar.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
    }
  };