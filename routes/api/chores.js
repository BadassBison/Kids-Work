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
                .then(({ children, familyName, firstName, id, chores }) => {
                    const secureChildren = [];
                    for (let {balance, chores, payments, date, id, firstName} of children) {
                        secureChildren.push({balance, chores, payments, date, id, firstName});
                    }
                    return res.json({ children: secureChildren, familyName, firstName, id, chores });
                }
            );
        }
    );

//returns child level json, not family level like the "/" route does
router.get('/:childId',
    passport.authenticate("jwt", { session: false }),
        (req, res) => {
            Family.findById(req.user.id)
                .then(({children}) => {
                    //don't send back password
                    const child = children.id(req.params.childId)
                    // const {balance, chores, payments, date, id, firstName} = family.children.id(req.params.childId);
                    const {balance, chores, payments, date, id, firstName} = child;
                    return res.json({balance, chores, payments, date, id, firstName});
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
                        .then(({ children }) => {
                            const childChores = children.id(req.params.childId).chores;
                            const newChore = childChores[childChores.length - 1];
                            return res.json({
                                id: newChore.id,
                                title: newChore.title,
                                body: newChore.body,
                                amount: newChore.amount,
                                deadline: newChore.deadline,
                                dateCreated: newChore.dateCreated,
                                status: newChore.status,
                                statusChangeDate: newChore.statusChangeDate,
                                priority: newChore.priority,
                                childId: child.id
                            });
                        })
                        .catch(err => console.log(err));
                }
                
            })
            .catch(err => console.log(err));
        
});

router.post("/",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {

        Family.findById(req.user.id)
            .then (family => {
                const chore = {...req.body};
                const { errors, isValid } = validateChoreInput(chore);

                if (!isValid) {
                    return res.status(400).json(errors);
                }
                family.chores.push(chore);
                family.markModified(`chores`);
                family.save()
                    .then(({ chores }) => {
                        const newChore = chores[chores.length - 1];
                        return res.json({
                            id: newChore.id,
                            title: newChore.title,
                            body: newChore.body,
                            amount: newChore.amount,
                            deadline: newChore.deadline,
                            dateCreated: newChore.dateCreated,
                            status: newChore.status,
                            statusChangeDate: newChore.statusChangeDate,
                            priority: newChore.priority,
                            childId: null
                        });
                    })
                    .catch(err => console.log(err));
                
            })
            .catch(err => console.log(err));
        
});

router.patch("/:childId/:choreId",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {
        Family.findById(req.user.id)
            .then(family => {

                const child = family.children.id(req.params.childId);
                let chore;
                if (req.body.status === "CHOSEN") {
                    chore = family.chores.id(req.params.choreId)
                } else {
                    chore = child.chores.id(req.params.choreId);
                }

                if (!chore) {
                    errors.childName = "Chore not found";
                    return res.status(400).json(errors);
                } 
                chore.status = req.body.status;
                chore.statusChangeDate = Date.now();

                if (chore.status === "COMPLETED") {
                    child.balance += chore.amount;
                } else if (chore.status === "CHOSEN") {
                    child.chores.push(chore);
                    family.chores[chore.__index].remove();
                    family.markModified(`children[${child.__index}].chores`);
                    family.markModified('chores');
                }
                family.save()
                    .then(({ children }) => {
                        const childChores = children.id(req.params.childId).chores;
                        const updatedChore = childChores.id(chore.id);

                        return res.json({ 
                            id: updatedChore.id, 
                            title: updatedChore.title, 
                            body: updatedChore.body,
                            amount: updatedChore.amount,
                            deadline: updatedChore.deadline,
                            dateCreated: updatedChore.dateCreated,
                            status: updatedChore.status,
                            statusChangeDate: updatedChore.statusChangeDate,
                            priority: updatedChore.priority,
                            childId: child.id
                        });
                    })
                    .catch(err => console.log(err));
            });
        });

module.exports = router;