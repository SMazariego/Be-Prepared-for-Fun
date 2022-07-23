const router = require("express").Router();
const { AgendaItem } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  AgendaItem.findAll()
    .then((dbAgendaItemData) => res.json(dbAgendaItemData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  AgendaItem.create({
    agenda_title: req.body.agenda_title,
    vacay_id: req.body.vacay_id,
    agenda_date: req.body.agenda_date,
    agenda_start: req.body.agenda_start,
    agenda_end: req.body.agenda_end,
    location: req.body.location,
    agenda_notes: req.body.agenda_notes,
  })
    .then((dbAgendaItemData) => res.json(dbAgendaItemData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  AgendaItem.update(
    {
      agenda_title: req.body.agenda_title,
      agenda_date: req.body.agenda_date,
      agenda_start: req.body.agenda_start,
      agenda_end: req.body.agenda_end,
      location: req.body.location,
      agenda_notes: req.body.agenda_notes,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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
