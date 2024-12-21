const mongoose = require('mongoose');

const routineModel = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default: null
    }],
    milestones:[{
        type: String,
        required: true
    }],
    started:{
        type: Date,
        required:true,
        default: Date.now()
    },
    duration:{
        type:String,
        required: true
    },
    weeklyBenefits:[{
        type:String,
        required: true
    }]

},{timestamps: true});

module.exports = mongoose.model('routine',routineModel);