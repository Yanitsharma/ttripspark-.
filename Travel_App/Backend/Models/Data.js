const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    tours: { type: String, required: true },
    image:{type: String, required: true},
});

module.exports = mongoose.model('Data', DataSchema);