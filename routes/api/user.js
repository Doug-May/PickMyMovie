const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Load Login and Registration Validations
const loginValidation = require('../../validation/loginValidation.js');
const registerValidation = require('../../validation/registerValidation.js');

//Load user model
const User = require('../../models/User.js');

// @route   POST api/users/register
// @desc    Register User
// @access  Public
router.post('/register', (req, res) => {
   const {errors, isValid} = registerValidation(req.body);
   //Check input validation
   if(!isValid){
      return res.status(400).json(errors);
   }
   User.findOne({email: req.body.email}).then(user => {
      if (user) {
         return res.status(400).json({email: 'Email already exists'});
      } else {
         const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            history: []
         });
         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err)
                  throw err;
               newUser.password = hash;
               newUser.save().then(user => res.json(user)).catch(err => console.log(err));
            });
         });
      }
   });
});

// @route   GET api/users/login
// @desc    Login User/ Return Token
// @access  Public
router.post('/login', (req, res) => {
   const {errors, isValid} = loginValidation(req.body);
   //Check input validation
   if(!isValid){
      return res.status(400).json(errors);
   }
   const email = req.body.email;
   const password = req.body.password;
   //Find user by Email
   User.findOne({email}).then(user => {
      //check for existing user
      if (!user) {
         errors.email = "User not found"
         return res.status(404).json(errors);
      }
      //Check password
      bcrypt.compare(password, user.password).then(isMatch => {
         if (isMatch) {
            //User matched, create payload and Sign web Token
            const payload = {
               id: user.id,
               name: user.name,
            }
            jwt.sign(
               payload,
               "secret",
               {expiresIn: 3600},
               (err, token) => {
                  res.json({
                     success: true,
                     token: 'Bearer ' + token,
                     user: user.id,
                     name: user.name
                  });
               });
         } else {
            errors.password = "Password incorrect"
            res.status(400).json(errors);
         }
      });
   });
});









module.exports = router;
