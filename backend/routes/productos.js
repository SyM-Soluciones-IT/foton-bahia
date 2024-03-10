const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Importa el modelo de categoría
const Categoria = require('../models/categoria.model');

router.get('/', async (req, res) => {
    try {
        // Obtener todas las colecciones excepto 'repuestos'
        const collections = await mongoose.connection.db.listCollections().toArray();
        const categoriasInfo = [];

        for (const collection of collections) {
            if (collection.name !== 'repuestos') {
                console.log(collection.name)
                // Buscar en los documentos de Categoria basado en el nombre de la colección
                const categoriaEncontrada = await Categoria.findOne({ name: collection.name });
                console.log(categoriaEncontrada.categoryImg)
                if (categoriaEncontrada) {
                    categoriasInfo.push({ 
                        name: categoriaEncontrada.title, 
                        categoryImg: categoriaEncontrada.categoryImg 
                    });
                }
            }
        }
        res.json(categoriasInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:categoria', async (req, res) => {
    const { categoria } = req.params;

    try {
        // Busca la colección con el nombre de la categoría
        const categoriaEncontrada = await Categoria.findOne({ title: categoria });

        // Verifica si se encontró la categoría
        if (!categoriaEncontrada) {
            return res.status(404).json({ message: `No se encontró la categoría "${categoria}"` });
        }

        // Devuelve los productos encontrados en la categoría
        res.json(categoriaEncontrada.products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
