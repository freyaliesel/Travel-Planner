const router = require("express").Router();
const { Traveler, Location } = require("../../models");

//create a trip
router.post("/", async (req, res) => {
    try {
        const tripData = await Trip.create({
            traveler_id: req.body.traveler_id,
            location_id: req.body.llocation_id,
        });
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete a trip
router.delete("/:id", async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!tripData) {
            res.status(404).json({ message: "No trip found with that id!" });
        }
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});
