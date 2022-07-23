const router = require("express").Router();
const { AgendaItem } = require("../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  AgendaItem.findAll()
    .then((dbAgendaItemData) => res.json(dbAgendaItemData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/", (req, res) => {
//   console.log("======================");
//   res.render("calendar", {
//     loggedIn: req.session.loggedIn,
//   });
//   if (!req.session.loggedIn) {
//     res.redirect("/homepage");
//     return;
//   }
// });

module.exports = router;
