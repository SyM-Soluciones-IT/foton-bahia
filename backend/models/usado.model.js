// usado.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usadoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    year: { type: String }
});

const Usado = mongoose.model('Usado', usadoSchema);

module.exports = Usado;
