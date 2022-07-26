const router = require("express").Router();
const { AgendaItem, Vacay } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, (req, res) => {
  AgendaItem.findAll({
    where: {
      vacay_id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "vacay_id",
      "start",
      // "display_date",
      // "start_time",
      // "end_time",
      "end",
      "location",
      "agenda_notes",
    ],
  })
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
