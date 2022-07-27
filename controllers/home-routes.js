const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("======================");

  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
