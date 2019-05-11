const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

router.get("/", (req, res) =>{
    res.json({ msg: "This is the user route"});
});

router.post('/signup', (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ name: req.body.name })
        .then( user => {
            if (user) {
                errors.name = 'Name is already taken';
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    name: req.body.name,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = {
                                    id: user.id,
                                    name: user.name
                                };
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token
                                        });
                                    }
                                );
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const name = req.body.name;
    const password = req.body.password;

    User.findOne({ name })
        .then(user => {
            if(!user) {
                errors.name = "This user does not exist";
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name
                        };
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        return res.status(400).json({ password: "Incorrect password"});
                    }
                });
        });
});

module.exports = router;