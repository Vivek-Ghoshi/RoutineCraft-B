const mongoose = require('mongoose');

const adminModel = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    routine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'routine'
    },

})

module.exports = mongoose.model('admin',adminModel)