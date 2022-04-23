const express = require("express");
const sequelize = require("./config/connection");


// replace this with the models we actually need
// const Book = require("./models/Book");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
