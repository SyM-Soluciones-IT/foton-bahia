// marcas.js
const router = require('express').Router();
const Marca = require('../models/marca.model');

router.route('/').get(async (req, res) => {
    try {
        const marcas = await Marca.find();
        res.json(marcas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
