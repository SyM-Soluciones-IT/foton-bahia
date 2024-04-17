// Define el esquema del modelo marca
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
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
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;