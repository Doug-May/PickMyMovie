const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');

//load in helper functions
const verifyToken = require('../../helpers/verifyToken.js');

//Load in user model
const User = require('../../models/User.js');

router.get('/history/:id', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
            res.sendStatus(403);            
        } else {
            const errors = {};
            User.findById({_id: req.params.id})
            .then(user => {
                if(user.history.length == 0) {
                    errors.history = "There are movies in your history!";
                    return res.status(404).json(errors);
                }
                res.json(user.history);
            })
            .catch(err => res.status(404).json({history: 'Error loading your movies'}));
        }
    })
});

module.exports = router;