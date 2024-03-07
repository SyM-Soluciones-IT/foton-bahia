// productos.js
const router = require('express').Router();
let Producto = require('../models/producto.model');

router.route('/api/productos').get((req, res) => {
    Producto.find()
        .then(trucks => res.json(trucks))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
