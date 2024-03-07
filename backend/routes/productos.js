// productos.js
const router = require('express').Router();
let Producto = require('../models/producto.model');

router.route('/').get(async (req, res) => {
    try {
        const trucks = await Producto.find();
        res.json(trucks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
