const router = require("express").Router();
const { AgendaItem } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("calendar");
});

router.get("/", withAuth, (req, res) => {
  AgendaItem.findAll()
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  AgendaItem.create({
    title: req.body.title,
    start: req.body.start,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    extendedProps: {
      location: req.body.location,
      vacay_id: req.body.vacay_id,
    },
    description: req.body.description,
  })
    .then((dbEventData) => res.json(dbEventData))
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
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      location: req.body.location,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id!" });
        return;
      }
      res.json(dbEventData);
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
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id!" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
