const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    trip_budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    traveler_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    traveler_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "traveler",
            key: "id",
        },
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "location",
            key: "id",
        },
    },
});

module.exports = Trip;
