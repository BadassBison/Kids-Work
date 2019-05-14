const express = require("express");
const router = express.Router();
const passport = require("passport");
const Family = require("../../models/Family");
const validateChildSignup = require('../../validation/child');
const bcrypt = require("bcryptjs");

router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Family.findById(req.user.id)
      .then(family => {
        const child = req.body;
        const { errors, isValid } = validateChildSignup(child);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(child.password, salt, (err, hash) => {
            if (err) throw err;
            child.password = hash;
          });
        });

        family.children.push( child );
        family.markModified(`children`);
        family
          .save()
          .then(({ children }) => {
            const newChild = children[children.length - 1];
            const { balance, chores, payments, date, id, firstName } = newChild;
            return res.json({ balance, chores, payments, date, id, firstName });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
