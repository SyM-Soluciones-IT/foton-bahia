// producto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    title: { type: String, required: true },
    decription: { type: String, required: true },
    category: { type: String, required: true },
    specs: { type: String, required: true }
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
