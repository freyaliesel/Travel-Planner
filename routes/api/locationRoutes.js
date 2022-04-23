const router = require("express").Router();
const { Traveler, Trip } = require("../../models");

// get all locations
router.get("/", async (req, res) => {
    try {
        const locationData = await Location.findAll({
            include: [{ model: Traveler, through: Trip, as: 'planned_trip' }],
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get single location
router.get("/:id", async (req, res) => {
    try {
        const locationData = await Location.findAll({
            include: [{ model: Traveler, through: Trip, as: 'planned_trip' }],
        });

        if (!locationData) {
            res.status(404).json({ message: "No location found with that id" });
            return;
        }
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a location
router.post('/', async (req, res) => {
    try{
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete a location
router.delete('/:id', async (req, res) => {
    try{
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!locationData) {
            res.status(404).json({message: 'No location found with that id!'});
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
