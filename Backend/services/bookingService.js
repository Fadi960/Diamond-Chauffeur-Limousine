const bookingModel = require("../model/bookingModel");
const { v4: uuid } = require("uuid");
const { 
        createBooking,
        getAllBooking,
        deleteBooking,
        updateBooking
} = require("../controller/bookingController");
const { models } = require("../model/index");

module.exports = {
    createBooking: async (body) => {
        try {
            body.bookingId = uuid();

            const booking = await bookingModel.createBooking(body);

            if (booking.error) {
                return {
                    error: booking.error,
                };
            }
            return {
                response: booking.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },


    getAllBooking: async () => {
        try {
            const booking = await bookingModel.getAllBooking();
            if (booking.error) {
                return {
                    error: booking.error,
                };
            }
            return {
                response: booking.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    deleteBooking: async (bookingId) => {
        try {
            const deleteBooking = await bookingModel.deleteBooking(bookingId);
            if (deleteBooking.error || !deleteBooking.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteBooking?.error || deleteBooking.response,
                    },
                };
            }
            return {
                response: {
                    message: "Booking is deleted!",
                    response: deleteBooking.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    updateBooking: async (body) => {
        try {
            const updateBooking = await bookingModel.updateBooking(body);
            if (updateBooking.error || !updateBooking.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateBooking?.error || updateBooking.response,
                    },
                };
            }
            return {
                response: {
                    message: "Booking is updated",
                    response: updateBooking.response,
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