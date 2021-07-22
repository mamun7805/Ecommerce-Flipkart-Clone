const express = require('express')
const router = express.Router();
const {Signup, Signin, RequireSignin} = require('../../controllers/admin/auth');

router.get('/test', (req, res)=> {
    res.send("Test routes")
})

// admin routes
router.post('/signup', Signup);
router.post('/signin', Signin);

router.post('/profile', (req, res)=> {
    res.status(200).json({user : " Admin profile"})
})

module.exports = router;