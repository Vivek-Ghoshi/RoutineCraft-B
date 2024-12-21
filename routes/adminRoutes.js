const express = require('express');
const adminModel = require('../models/adminModel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const routineModel = require('../models/routineModel');

router.post('/create',async function(req,res){
    try {
        let { email,password,name} = req.body;
        const ifAdmin = await adminModel.findOne({email});
        if(ifAdmin) return res.send('you already have account please login');

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        const admin = await adminModel.create({
            name,
            email,
            password: hash,
        })
        const token = jwt.sign({email:admin.email, id:admin._id},process.env.JWT_KEY);
        res.cookie('token',token);
        res.json(admin)
    } catch (error) {
        console.log('Error from create admin route',error.message)
    }
});

router.post('/create/routine',async function(req,res){
    try {
         let{name,duration,weeklyBenefits,milestones,} = req.body;
         let routine = await routineModel.findOne({name});
         if(routine) return res.send('routine is already present');
         const newRoutine = await routineModel.create({
            name,
            milestones,
            duration,
            weeklyBenefits
         });
         res.json(newRoutine);
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;