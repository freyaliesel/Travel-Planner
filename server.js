const express = require("express");
const sequelize = require("./config/connection");


// replace this with the models we actually need
// const Traveler = require("./models/traveler");
// const Location = require("./models/location")
// const Trip = require("./models/trip")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
