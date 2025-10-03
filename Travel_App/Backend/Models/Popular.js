const mongoose = require('mongoose');
const PopularSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    category: { type: [String], required: true },
    image:{type: String, required: true},
    location:{type: String, required: true},
     days: {type: String, required: true},
    price: {type: Number, required: true},
    afterDiscount:{type: Number},
    rating: {type: Number, default:0},
    reviews:  {type: Number, default:0},
});

module.exports = mongoose.model('Popular', PopularSchema);