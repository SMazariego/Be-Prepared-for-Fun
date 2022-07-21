const router = require("express").Router();
const { AgendaItem } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  AgendaItem.findAll()
    .then((dbAgendaItemData) => {
      if (dbAgendaItemData) {
        console.log(dbAgendaItemData);
        const agenda = dbAgendaItemData.get({ plain: true });

        res.render("agenda", {
          agenda,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  AgendaItem.create({
    //todo add agenda fields
    agenda_text: req.body.agenda_text,
    user_id: req.session.user_id,
    vacay_id: req.body.vacay_id,
  })
    .then((dbAgendaItemData) => res.json(dbAgendaItemData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  AgendaItem.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbAgendaItemData) => {
      if (!dbAgendaItemData) {
        res.status(404).json({ message: "No event found with this id!" });
        return;
      }
      res.json(dbAgendaItemData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
