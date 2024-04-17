// marcas.js
const router = require('express').Router();
const Brand = require('../models/brand.model');

router.route('/').get(async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
