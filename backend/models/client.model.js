// Define el esquema del modelo marca
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
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
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;