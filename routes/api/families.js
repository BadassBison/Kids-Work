const express = require("express");
const router = express.Router();
const Family = require('../../models/Family');
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

router.get("/", (req, res) =>{
    res.json({ msg: "This is the family route"});
});

router.post('/signup', (req, res) => {
    
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Family.findOne({ familyName: req.body.familyName })
        .then( family => {
            if (family) {
                errors.familyName = 'Name is already taken';
                return res.status(400).json(errors);
            } else {
                const newFamily = new Family({
                    familyName: req.body.familyName,
                    firstName: req.body.firstName,
                    children: req.body.children,
                    email: req.body.email,
                    password: req.body.password
                });

                newFamily.children.forEach( child => {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newFamily.password, salt, (err, hash) => {
                            if (err) throw err;
                            child.password = hash;
                        });
                    });
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newFamily.password, salt, (err, hash) => {
                        if (err) throw err;
                        newFamily.password = hash;
                        newFamily.save()
                            .then(family => {
                                const payload = {
                                    id: family.id,
                                    familyName: family.familyName,
                                    firstName: family.firstName,
                                    isParent: true
                                };
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            id: family.id,
                                            familyName: family.familyName,
                                            firstName: family.firstName,
                                            isParent: true
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

router.post('/parentLogin', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const familyName = req.body.familyName;
    const password = req.body.password;

    Family.findOne({ familyName })
        .then(family => {
            if(!family) {
                errors.familyName = "This family does not exist";
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, family.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: family.id,
                            familyName: family.familyName,
                            firstName: family.firstName,
                            isParent: true
                        };
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    id: family.id,
                                    familyName: family.familyName,
                                    firstName: family.firstName,
                                    isParent: true
                                });
                            }
                        );
                    } else {
                        return res.status(400).json({ password: "Incorrect password"});
                    }
                });
        });
});

router.post('/childLogin', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const familyName = req.body.familyName;
    const firstName = req.body.firstName;
    const password = req.body.password;

    Family.findOne({ familyName })
        .then(family => {
            if(!family) {
                errors.familyName = "This family does not exist";
                return res.status(404).json(errors);
            }

            let loginChild;
            family.children.forEach( child => {
                if (child.firstName === firstName) {
                    loginChild = child;
                }
            });
            if (!loginChild) {
                errors.firstName = "This child does not exist";
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, loginChild.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: family.id,
                            familyName: family.familyName,
                            firstName: family.firstName,
                            isParent: false
                        };
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    id: family.id,
                                    familyName: family.familyName,
                                    firstName: family.firstName,
                                    isParent: false
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