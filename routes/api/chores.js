const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateChoreInput = require('../../validation/chores');
const Family = require('../../models/Family');

//could optimize in the future to filter chores based on status
router.get('/',
    passport.authenticate("jwt", { session: false }),
        (req, res) => {
            Family.findById(req.user.id)
                .then(family => {
                    return res.json(family);
                }
            );
        }
    );

//returns child level json, not family level like the "/" route does
router.get('/:childId',
    passport.authenticate("jwt", { session: false }),
        (req, res) => {
            Family.findById(req.user.id)
                .then(family => {
                    return res.json(family.children.id(req.params.childId));
                }
            );
        }
    );

//child login has correct jwt credentials to post
router.post("/:childId",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {

        Family.findById(req.user.id)
            .then (family => {
                const chore = req.body;
                // for (let maybeChild of family.children) {
                //     if (maybeChild.firstName === chore.childName) {
                //         child = maybeChild;
                //     }
                // }
                const child = family.children.id(req.params.childId);

                if (!child) {
                    errors.childName = "Child name not found";
                    return res.status(400).json(errors);
                } else {
                    const { errors, isValid } = validateChoreInput(chore);

                    if (!isValid) {
                        return res.status(400).json(errors);
                    }

                    child.chores.push(chore);
                    family.markModified(`children[${child.__index}].chores`);
                    family.save()
                        .then(family => {
                            return res.json(family);
                        })
                        .catch(err => console.log(err));
                }
                
            })
            .catch(err => console.log(err));
        
});

router.patch("/:childId/:choreId",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {
        Family.findById(req.user.id)
            .then(family => {
                const child = family.children.id(req.params.childId);
                const chore = child.chores.id(req.params.choreId);
                if (!chore) {
                    errors.childName = "Chore not found";
                    return res.status(400).json(errors);
                } 
                else {
                    chore.status = req.body.status;
                    if (chore.status === "COMPLETED") {
                        child.balance += chore.amount;
                    } 
                    family.save()
                        .then(family => {
                            return res.json(family);
                        })
                        .catch(err => console.log(err));
                }
            });
        });

module.exports = router;