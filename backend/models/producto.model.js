// producto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    specs: { type: String }
});


const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
