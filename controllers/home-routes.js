const router = require("express").Router();
const sequelize = require("../config/connection");
// const {User} = require("../models");

//?do we reference the quotes api here for it to populate on the homepage?
// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
      });
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
