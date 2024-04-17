// marcas.js
const router = require('express').Router();
const Category = require('../models/category.model');

router.route('/').get(async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
