// usado.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usedSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    year: { type: String }
});

const Used = mongoose.model('Used', usedSchema);

module.exports = Used;
