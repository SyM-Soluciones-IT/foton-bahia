// usados.js
const router = require('express').Router();
const Usado = require('../models/usado.model');

router.route('/').get(async (req, res) => {
    try {
        const usados = await Usado.find();
        res.json(usados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
