// marcas.js
const router = require('express').Router();
const Client = require('../models/client.model');

router.route('/').get(async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
