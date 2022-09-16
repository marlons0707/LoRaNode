const express = require('express');
const router = express.Router();
const Door = require('../models/Door');

// GET ALL ACTIONS
router.get('/', async (req, res) => {
    try {
        const actions = await Door.find().sort( { _id: -1 } )
        res.json(actions)
    } catch (error) {
        res.json({ message: error })
    }
});


// GET DOOR STATUS
router.get('/status', async (req, res) => {
    try {
        const status = await Door.find().sort( { _id: -1 } ).limit(1)
        res.json(status)
    } catch (error) {
        res.json({ message: error })
    }
});

module.exports = router;