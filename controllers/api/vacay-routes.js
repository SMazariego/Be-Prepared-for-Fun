const router = require("express").Router();
const { Vacay, User, AgendaItem } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", withAuth, (req, res) => {
  console.log("======================");
  Vacay.findAll({
    attributes: [
      "id",
      "title",
      "user_id",
      "start_date",
      "end_date",
      "destination",
      "created_at",
    ],
    include: [
      {
        model: AgendaItem,
        attributes: [
          "id",
          "agenda_title",
          "vacay_id",
          "start",
          "end",
          // "display_date",
          // "start_time",
          // "end_time",
          "location",
          "agenda_notes",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbVacayData) => {
      console.log(dbVacayData);
      res.json(dbVacayData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//for calendar
router.get("/:id", (req, res) => {
  Vacay.findByPk(req.params.id, {
    attributes: [
      "id",
      "title",
      "user_id",
      "start_date",
      "end_date",
      "destination",
      "created_at",
    ],
    include: [
      {
        model: AgendaItem,
        attributes: [
          "id",
          "title",
          "vacay_id",
          "start",
          "end",
          // "display_date",
          // "start_time",
          // "end_time",
          "location",
          "agenda_notes",
        ],
      },
    ],
  })
    .then((dbVacayData) => {
      // console.log(dbVacayData);
      if (!dbVacayData) {
        res.status(404).json({ message: "No Vacation found with this id" });
        return;
      }
      res.json(dbVacayData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Vacay.create({
    title: req.body.title,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    destination: req.body.destination,
    user_id: req.session.user_id,
  })
    .then((dbVacayData) => res.json(dbVacayData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Vacay.update(
    {
      title: req.body.title,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      destination: req.body.destination,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbVacayData) => {
      console.log(dbVacayData);
      if (!dbVacayData) {
        res.status(404).json({ message: "No Vacation found with this id" });
        return;
      }
      res.json(dbVacayData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Vacay.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbVacayData) => {
      if (!dbVacayData) {
        res.status(404).json({ message: "No vacay found with this id" });
        return;
      }
      res.json(dbVacayData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
