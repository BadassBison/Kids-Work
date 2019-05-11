const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateChoreInput = require('../../validation/chores');

router.post("/",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {
        cosnt { isValid, errors } = 
    })