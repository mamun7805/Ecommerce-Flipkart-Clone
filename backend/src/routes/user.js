const express = require('express');
const router = express.Router();
const User = require('../models/user');





router.post("/signup", (req, res )=> {
    User.findOne({email : req.body.email})
    .exec((err, user)=> {
        if(user) return res.status(400).json({
            message : "User already registered"
        })
        
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const new_user = new User({
            firstName,
            lastName,
            email,
            password,
            username : Math.random().toString()
        })


        new_user.save()
            .then(user=> {
                if(user){
                    return res.status(200).json({user})
                }
            })
            .catch(err => {
                if(err){
                    return res.status(400).json({message : "Something went wrong"})
                }
            })

       
        
    })
})


module.exports = router;