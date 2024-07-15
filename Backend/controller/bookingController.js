const { models } = require("../model");
const bookingService = require("../services/bookingService");
const joi = require("joi");

const createBookingSchema = joi.object().keys({
    pickupLocation: joi.string().min(3).max(255).required(),
    dropOffLocation: joi.string().min(3).max(255).required(),
    status: joi.string().required(),
    price: joi.number().precision(2).required().min(0),
    orderDate: joi.string().required(),
    orderTime: joi.string().required(),
    passengers: joi.number().integer().min(1).required(),
    userId: joi.string().min(3).max(255).required(),
    carId: joi.string().min(3).max(255).required(),
});
const deleteBookingSchema = joi.object().keys({
    bookingId: joi.string().min(3).max(255),
});
const updateBookingSchema = joi.object().keys({
    bookingId: joi.string().min(3).max(255).required(),
    pickupLocation: joi.string().min(3).max(255).required().optional(),
    dropOffLocation: joi.string().min(3).max(255).required().optional(),
    status: joi.string().valid('published', 'inactive', 'scheduled', 'pending').optional(),
    price: joi.number().precision(2).required().min(0).optional(),
    orderDate: joi.string().required().optional(),
    orderTime: joi.string().required().optional(),
    passengers: joi.number().integer().min(1).required().optional(),
});

module.exports ={
    createBooking: async (req, res) => {
        try{
            const validate = await createBookingSchema.validateAsync(req.body);
            const booking = await bookingService.createBooking(validate);

            if(booking.error){
                return res.send({
                    error: booking.error,
                });
            }
            return res.send({
                response: booking.response,
            });
        }catch(error){
            console.log("error from controller",error);
            return res.send({
                error: error,
            });
        }
    },

    getAllBooking: async(req,res)=>{
        try{
            const booking = await bookingService.getAllBooking();
            if(booking.error){
                return res.send({
                    error: booking.error,
                });
        }
        return res.send({
            response: booking.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},
deleteBooking: async (req, res) => {
    try {
        console.log(":pg=>", req.query)
        const validate = await deleteBookingSchema.validateAsync(req.query);
        const deleteBooking = await bookingService.deleteBooking(validate.bookingId);

        if (deleteBooking.error) {
            return res.send({ error: deleteBooking.error });
        }
        return res.send({ response: deleteBooking.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
},
  updateBooking: async (req,res) => {
    try{
        const validate = await updateBookingSchema.validateAsync(req.body);
        const updateBooking = await bookingService.updateBooking(validate);
        if (updateBooking.error) {
            return res.send({ error: updateBooking.error });
        }
        return res.send({ response: updateBooking.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
    }
  };