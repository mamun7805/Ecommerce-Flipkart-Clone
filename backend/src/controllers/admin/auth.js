const userModel = require("../../models/user")
const jwt = require('jsonwebtoken');

exports.Signup = (req, res)=> {

    const {email} = req.body;
    userModel.findOne({email})
        .then(user =>{
            if(user){
                return res.status(400).json({message : "Admin alredy exist"})
            }
            const {firstName,lastName, email, password} = req.body;
            const data = new userModel({
                firstName, 
                lastName,
                email ,
                password,
                username : Math.random().toString(),
                role : 'admin'
            }) 
            data.save()
                .then(()=>{
                    return res.status(200).json({message : "Admin Registration successfull"})
                })
                .catch(()=>{
                    return res.status(400).json({message : " Admin Registration Failed"})
                })
        })
}

exports.Signin = (req, res)=> {
    userModel.findOne({email : req.body.email})
        .then(user => {
            if(!user) return res.status(400).json({message : "Please signup"})
            if(user.authenticate(req.body.password)  && user.role === "admin"){
                const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET, {expiresIn : '1h'})
                const {_id, firstName, lastName, email, role,fullName} = user;
                res.status(200).json({
                    token,
                    user : { _id, firstName, lastName,email,role,fullName}
                });
            }else{
                return res.status(400).json({
                    message : "Invalid Password"
                })
            }
        })
        .catch(()=> {
            return res.status(400).json({message : "Something is wrong"})
        })
}

exports.RequireSignin = (req, res, next)=> {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}
