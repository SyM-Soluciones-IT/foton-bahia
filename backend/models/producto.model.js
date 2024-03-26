// producto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    name: { type: String, required: true },
    engine: { type: String },
    category: { type: String },
    power : { type: String },
    gearbox : { type: String },
    load: { type: String },
    image: { type: Array },
    video: { type: Array },
});


const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
