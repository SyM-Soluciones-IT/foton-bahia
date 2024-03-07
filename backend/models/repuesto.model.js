// repuesto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repuestoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Repuesto = mongoose.model('Repuesto', repuestoSchema);

module.exports = Repuesto;
