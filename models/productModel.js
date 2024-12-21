const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        MaxLength: '20',

    },
    charges:{
        type: Number,
        required: true
    },
    image: String,

},{timestamps: true});

module.exports = mongoose.model('product',productModel);