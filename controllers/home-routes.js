const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("======================");
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
      });
      if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
      }
});


module.exports = router;
