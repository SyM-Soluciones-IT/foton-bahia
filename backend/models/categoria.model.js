// categoria.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    specs: { type: String }
});

const categoriaSchema = new Schema({
    categoryImg: { type: String, required: true },
    title: { type: String, required: true },
    products: [productoSchema]
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
