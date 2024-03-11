// marcas.js
const router = require('express').Router();
const Cliente = require('../models/cliente.model');

router.route('/').get(async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
