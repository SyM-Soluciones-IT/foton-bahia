// producto.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    name: { type: String, required: true },
    engine: { type: String },
    category: { type: String },
    power : { type: String },
    gearbox : { type: String },
    load: { type: String },
    image: { type: Array },
    video: { type: Array },
});


const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
