const router = require("express").Router();
const { Location, Trip } = require("../../models");

// get all travelers
router.get("/", async (req, res) => {
    try {
        const travelerData = await Traveler.findAll({
            include: [{ model: Location, through: Trip, as: 'Planned_trips' }],
        });
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get single traveler
router.get("/:id", async (req, res) => {
    try {
        const travelerData = await Traveler.findAll({
            include: [{ model: Location, through: Trip, as: 'planned_trips' }],
        });

        if (!travelerData) {
            res.status(404).json({ message: "No traveler found with that id" });
            return;
        }
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a traveler
router.post('/', async (req, res) => {
    try{
        const travelerData = await Traveler.create(req.body);
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete a traveler
router.delete('/:id', async (req, res) => {
    try{
        const travelerData = await Traveler.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!travelerData) {
            res.status(404).json({message: 'No traveler found with that id!'});
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
