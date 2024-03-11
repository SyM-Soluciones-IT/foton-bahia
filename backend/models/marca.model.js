// Define el esquema del modelo marca
const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Crea el modelo marca a partir del esquema
const Marca = mongoose.model('Marca', marcaSchema);
module.exports = Marca;