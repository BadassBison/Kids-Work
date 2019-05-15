const express = require("express");
const router = express.Router();
const passport = require("passport");
const Family = require("../../models/Family");

// request requires a payment_amount field specifying how much money to reduce from childs account
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
            const amount = req.body.payment_amount;
            child.balance -= amount;
            child.payments.push({ amount });
            family.markModified(`children[${child.__index}].payments`);
            family
            .save()
              .then(({ children }) => {
                const { payments } = children.id(child.id);
                const lastPayment = payments[payments.length - 1];
                return res.json({ 
                  id: lastPayment.id,
                  amount: lastPayment.amount,
                  datePaid: lastPayment.datePaid,
                  childId: child.id
                });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    );
    
module.exports = router;
    
    // probably should add childId to jwt, although not relevant here now