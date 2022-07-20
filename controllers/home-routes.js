const router = require("express").Router();
// const sequelize = require("../config/connection");
// const {User} = require("../models");

//?do we reference the quotes api here for it to populate on the homepage?

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
