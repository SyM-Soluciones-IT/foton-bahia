// repuestos.js
const router = require('express').Router();
const SparePart = require('../models/sparePart.model');

router.route('/').get(async (req, res) => {
    try {
        const spareParts = await SparePart.find();
        res.json(spareParts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
