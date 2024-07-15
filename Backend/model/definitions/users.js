const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class users extends Model {}

users.init({
    userId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    userName: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(34),
    },
    email: {
        unique: true,
        allowNull: true,
        type: DataTypes.STRING(34)
    },
    password: {
        allowNull: true,
        type: DataTypes.STRING(1000),
    },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'customer', 'guest'],
        allowNull: false,
        defaultValue: 'customer'
}, 
},
{
    timestamps: true,
    paranoid: true,
    tableName: "users",
    sequelize,
});

module.exports = users;
