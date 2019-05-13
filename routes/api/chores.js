const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateChoreInput = require('../../validation/chores');
const Chore = require('../../models/Chore');


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
    const newChore = new Chore({
        title: req.body.title,
        body: req.body.body,
        amount: req.body.amount,
        parent: req.family.id
        //lookup by child name here?
        // child: req.body.child
    });

    newChore.save()
        .then( chore => res.json(chore));
});

module.exports = router;