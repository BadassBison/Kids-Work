const express = require("express");
const router = express.Router();
const passport = require("passport");
const Family = require("../../models/Family");

router.post("/:childId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Family.findById(req.user.id)
      .then(family => {
          const child = family.children.id(req.params.childId);
          if (!child) {
              errors.childName = "Child name not found";
              return res.status(400).json(errors);
            }
            const amount = child.balance;
            child.balance = 0;
            child.payments.push({ amount });
            family.markModified(`children[${child.__index}].payments`);
            family
            .save()
            .then(family => {
                return res.json(family);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    );
    
module.exports = router;
    
    // probably should add childId to jwt, although not relevant here now