const Validator = require('validator');
const isEmpty = require('./isEmpty.js');

module.exports = function validateLoginInput(data) {
   let errors = {};

   data.email = !isEmpty(data.email) ? data.email : '';
   data.password = !isEmpty(data.password) ? data.password : '';

   if(!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
   }

   if(Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
   }

   if(data.password.length < 6) {
    errors.password = "Password must contain at least six characters";
   }

   if(Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
   }

   return {
      errors,
      isValid: isEmpty(errors)
   };
};