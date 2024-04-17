const express = require('express');
const router = express.Router();

const Vehicle = require('../models/vehicle.model');

// Ruta para obtener productos por categoría
router.get('/:categoria', async (req, res) => {
    const categoria = req.params.categoria;
    try {
      const products = await Vehicle.find({ category: categoria });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
