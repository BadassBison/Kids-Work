const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateChoreInput = require('../../validation/chores');
const Family = require('../../models/Family');

router.get('/', (req, res) => {
    Chore.find()
        .sort({ date: -1 })
        .then(chores => res.json(chores))
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    Chore.findById(req.params.id)
        .then(chore => res.json(chore))
        .catch(err => res.status(400).json(err));
});

//child login has correct jwt credentials to post
router.post("/",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {
        const { isValid, errors } = validateChoreInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Family.findById(req.user.id)
            .then (family => {
                const chore = req.body;
                let child;
                for (let maybeChild of family.children) {
                    if (maybeChild.firstName === chore.childName) {
                        child = maybeChild;
                    }
                }
                if (!child) {
                    errors.childName = "Child name not found";
                    return res.status(400).json(errors);
                } else {
                    const { errors, isValid } = validateChoreInput(chore);

                    if (!isValid) {
                        return res.status(400).json(errors);
                    }

                    child.chores.push(chore);
                    family.markModified(`children[${family.children.length - 1}].chores`);
                    family.save()
                        .then(family => {
                            return res.json(family);
                        })
                        .catch(err => console.log(err));
                }
                
        });
        
});

module.exports = router;