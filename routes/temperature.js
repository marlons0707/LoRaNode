const express = require('express')
const router = express.Router();
const Temperature = require('../models/Temperature');

// GET ALL TEMPERATURES
router.get('/', async (req, res) => {
    try {
        const measures = await Temperature.find().sort({ _id: -1 }) // .select('TEMPC_SHT -_id')
        res.json(measures.reverse())
    } catch (error) {
        res.json({ message: error })
    }
});

// GET TOP 10
router.get('/top', async (req, res) => {
    try {
        const measures = await Temperature.find().sort({ _id: -1 }).limit(10) // .select('TEMPC_SHT -_id')
        res.json(measures.reverse())
    } catch (error) {
        res.json({ message: error })
    }
});


// SHOW
router.get('/:measureId', async (req, res) => {
    try {
        const measure = await Temperature.findById(req.params.measureId);
        res.json(measure);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;