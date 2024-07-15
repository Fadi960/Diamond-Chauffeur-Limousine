const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Bookings extends Model {}

Bookings.init({
    bookingId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    carId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: 'cars',
            key: 'carId'
        }
    },
    userId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: 'users',
            key: 'userId'
        }
    },
    pickupLocation: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    dropOffLocation: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
    },
    orderDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
    },
    orderTime: {
        allowNull: false,
        type: DataTypes.TIME,
    },
    passengers: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true,
    paranoid: true,
    tableName: "bookings",
    sequelize,
});

module.exports = Bookings;
