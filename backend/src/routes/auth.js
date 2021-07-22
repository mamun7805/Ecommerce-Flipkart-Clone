const express = require('express')
const router = express.Router();
const {Signup, Signin} = require('../controllers/auth')

router.get('/test', (req, res)=> {
    res.send("Test routes")
})


// customer routes
router.post('/signup', Signup);
router.post('/signin', Signin);



router.post('/profile', (req, res)=> {
    res.status(200).json({user : "  customer profile"})
})


module.exports = router;