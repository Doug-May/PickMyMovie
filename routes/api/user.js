const express = require("express");
const router = express.Router();

// @route   POST api/user/login
// @desc    User Login
// @access  Public
router.post('/login', (req, res) => {
    let errors = {
        email: 'Wrong Email',
        password: 'Wrong Password'
    };
    if (req.body.email == 'test' && req.body.password == 'test') {
        res.send("Success");
    } else {
        res.send("Fail");
    }
 });

module.exports = router;
