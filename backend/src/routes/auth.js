const express = require('express')
const router = express.Router();
const {Signup, Signin} = require('../controllers/auth')

router.get('/test', (req, res)=> {
    res.send("Test routes")
})

router.post('/signup', Signup);
router.post('/signin', Signin);




module.exports = router;