const router = require("express").Router();


//?do we reference the quotes api here for it to populate on the homepage?
// get all posts for homepage
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
