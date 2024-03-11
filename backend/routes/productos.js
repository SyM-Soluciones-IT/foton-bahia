const express = require('express');
const router = express.Router();

// Importa el modelo de categoría
const Categoria = require('../models/categoria.model');
const Producto = require('../models/producto.model');

router.get('/', async (req, res) => {
    try {
      const categorias = await Categoria.find();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Ruta para obtener productos por categoría
router.get('/:categoria', async (req, res) => {
    const categoria = req.params.categoria;
    try {
      const productos = await Producto.find({ category: categoria });
      res.json(productos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
