// repuestos.js
const router = require('express').Router();
const Repuesto = require('../models/repuesto.model');

router.route('/').get(async (req, res) => {
    try {
        const repuestos = await Repuesto.find();
        res.json(repuestos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
