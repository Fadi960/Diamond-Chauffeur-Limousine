const { models } = require("./index");

module.exports = {
    createBooking: async (body) => {
        try {
            // Validate required fields
            const requiredFields = ['carId', 'userId', 'pickupLocation', 'dropOffLocation', 'status', 'price', 'orderDate', 'orderTime', 'passengers'];
            const missingFields = requiredFields.filter(field => !body[field]);

            if (missingFields.length > 0) {
                throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
            }

            const booking = await models.bookings.create({ ...body });
            return {
                response: booking,
            };
        } catch (error) {
            console.error("Error from model - createBooking:", error);
            return {
                error: error.message || "Error creating booking",
            };
        }
    },

     getAllBooking: async () => {
        try {
            const bookings = await models.bookings.findAll({
                attributes: ['bookingId', 'pickupLocation', 'dropOffLocation', 'status', 'price'],
                include: [
                    {
                        model: models.users,
                        attributes: ['userName','userId']
                    },
                    {
                        model: models.cars,
                        attributes: ['brand','carId']
                    }
                ]
            });
    
            // Log the raw response for debugging
            console.log(JSON.stringify(bookings, null, 2));
    
            // Format the bookings to include the desired attributes
            const formattedBookings = bookings.map(booking => ({
                bookingId: booking.bookingId,
                userName: booking.user ? booking.user.userName : null,
                brand: booking.car ? booking.car.brand : null,
                pickupLocation: booking.pickupLocation,
                dropOffLocation: booking.dropOffLocation,
                status: booking.status,
                price: booking.price
            }));
    
            return {
                response: formattedBookings,
            };
        } catch (error) {
            console.error("Error from model - getAllBooking:", error);
            return {
                error: error.message || "Error fetching bookings",
            };
        }
    },
    
    

    deleteBooking: async (bookingId) => {
        try {
            const deleteBooking = await models.bookings.destroy({
                where: {
                    bookingId: bookingId,
                },
            });

            return {
                response: deleteBooking,
            };
        } catch (error) {
            console.error("Error from model - deleteBooking:", error);
            return {
                error: error.message || "Error deleting booking",
            };
        }
    },

    updateBooking: async ({ bookingId, ...body }) => {
        try {
            const updateBooking = await models.bookings.update({ ...body }, {
                where: {
                    bookingId: bookingId,
                },
            });
            return {
                response: updateBooking,
            };
        } catch (error) {
            console.error("Error from model - updateBooking:", error);
            return {
                error: error.message || "Error updating booking",
            };
        }
    },
};


/*
getAllBooking: async () => {
        try {
            const bookings = await models.bookings.findAll({
                attributes: {
                    exclude: ["password"],
                }
            });
            return {
                response: bookings,
            };
        } catch (error) {
            console.error("Error from model - getAllBooking:", error);
            return {
                error: error.message || "Error fetching bookings",
            };
        }
    },*/