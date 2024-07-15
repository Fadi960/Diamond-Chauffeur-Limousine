const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class cars extends Model {}

cars.init({
    carId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    brand: {
        allowNull: false,
        type: DataTypes.STRING(255),
    },
    model: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },
    year: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING(1000),
    },
    seats: {
        allowNull: false,
        type: DataTypes.STRING(10),
    },
    status: {
        type: DataTypes.ENUM,
        values: ['published', 'inactive', 'scheduled','pending'],
        allowNull: false,
        defaultValue: 'pending'
    }, 
    gearType: {
    type: DataTypes.ENUM,
    values: ['automatic', 'manual'],
    allowNull: false,
    defaultValue: 'automatic'
    }, 
    fuelType: {
    type: DataTypes.ENUM,
    values: ['petrol', 'diesel', 'electric','hybrid'],
    allowNull: false,
    defaultValue: 'petrol'
    }, 
},
{
    timestamps: true,
    paranoid: true,
    tableName: "cars",
    sequelize,
});

module.exports = cars;
