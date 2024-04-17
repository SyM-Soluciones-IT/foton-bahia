// repuesto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sparePartSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const SparePart = mongoose.model('SparePart', sparePartSchema);

module.exports = SparePart;
