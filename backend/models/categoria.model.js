// categoria.model.js
const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
  });

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
