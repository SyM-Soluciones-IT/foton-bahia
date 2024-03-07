// repuestos.js
const router = require('express').Router();
let Repuesto = require('../models/repuesto.model');

router.route('/api/repuestos').get((req, res) => {
    Repuesto.find()
        .then(parts => res.json(parts))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
