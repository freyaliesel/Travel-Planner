const Traveler = require("./traveler");
const Location = require("./location");
const Trip = require("./trip");

Traveler.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'planned_trips'
});

// Trip.belongsTo(Traveler, {
//     foreignKey: "traveler_id",
// });

Location.belongsToMany(Traveler, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'location_travellers'
});



module.exports = { Traveler, Location, Trip };