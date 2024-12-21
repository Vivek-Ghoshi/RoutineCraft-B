const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    routine:{},
    progress:{},
    image: String,
},{timestamps: true})

module.exports = mongoose.model('user',userModel);