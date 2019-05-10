const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");

router.get("/", (req, res) =>{
    res.json({ msg: "This is the user route"});
});

router.post('/signup', (req, res) => {
    User.findOne({ name: req.body.name })
        .then( user => {
            if (user) {
                return res.status(400).json({ name: "name already taken"});
            } else {
                const newUser = new User({
                    name: req.body.name,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // if (err) { throw err; }
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

module.exports = router;