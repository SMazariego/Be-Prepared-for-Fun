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
    title: req.body.title,
    vacay_id: req.body.vacay_id,
    start: req.body.start,
    end: req.body.end,
    display_date: req.body.display_date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    location: req.body.location,
    agenda_notes: req.body.agenda_notes,
  })
    .then((dbAgendaItemData) => {
      console.log(dbAgendaItemData);
      res.json(dbAgendaItemData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  AgendaItem.update(
    {
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      display_date: req.body.display_date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
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
