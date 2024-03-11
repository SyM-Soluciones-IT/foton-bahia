// Define el esquema del modelo marca
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
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
const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;