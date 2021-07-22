const { check, validationResult}  = require("express-validator");


exports.SignupValidation = [
    check('firstName')
        .notEmpty()
        .withMessage("First Name is required"),
    check('lastName')
        .notEmpty()
        .withMessage("last Name is required"),
    check('email')
        .isEmail()
        .withMessage("Valid email is required"),
    check('password')
        .isLength({min : 6})
        .withMessage("At least 6 characters required")
]

exports.SigninValidation = [
    check('email')
        .isEmail()
        .withMessage("Valid email is required"),
    check('password')
        .isLength({min : 6})
        .withMessage("At least 6 characters required")
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length>0){
        return  res.status(400).json({error: errors.array()[0].msg})
    }
    next();
}