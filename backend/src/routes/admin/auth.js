const express = require('express')
const router = express.Router();
const {Signup, Signin} = require('../../controllers/admin/auth');
const {SignupValidation, SigninValidation, isRequestValidated}  = require("../../validators/auth");
router.get('/test', (req, res)=> {
    res.send("Test routes")
})

// admin routes
router.post('/signup',SignupValidation, isRequestValidated, Signup);
router.post('/signin', SigninValidation, isRequestValidated, Signin);

router.post('/profile', (req, res)=> {
    res.status(200).json({user : " Admin profile"})
})

module.exports = router;