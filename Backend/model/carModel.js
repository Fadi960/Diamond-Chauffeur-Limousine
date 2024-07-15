const { models } = require("./index");

module.exports = {
    createCar : async(body) => {
        try{
            const car = await models.cars.create({...body});
            return{
                response: car,
            }
        }catch(error){
            console.log("error from model",error);
            return{
                error: error,
            };
        }
    },

    getAllCar : async()=>{
        try{
            const car = await models.cars.findAll({
                attributes: {
                    exclude: ["password"],
                }
            });
            return{
                response: car,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    deleteCar: async (carId) => {
        try{
            const deleteCar = await models.cars.destroy({ 
                where: {
                    carId: carId,
                },
            });

            return {
                response: deleteCar,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    updateCar: async ({ carId, ...body }) => {
        try {
            console.log(carId,body);
            const updateCar = await models.cars.update({ ...body},{
                where: {
                    carId: carId,
            },
            })
            return {
                response: updateCar,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    findCarById: async ( carId) => {
        try {
            console.log(carId);
            const car = await models.cars.findOne({
                where: {
                    carId: carId,
                },
                attributes: ['carId', 'brand', 'model', 'year', 'fuelType', 'status'],
            });
            return {
                response: car,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
};

