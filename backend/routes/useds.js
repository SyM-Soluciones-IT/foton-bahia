// usados.js
const router = require('express').Router();
const Used = require('../models/used.model');

router.route('/').get(async (req, res) => {
    try {
        const useds = await Used.find();
        res.json(useds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
