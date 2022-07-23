const router = require("express").Router();
const sequelize = require("../config/connection");
const { Vacay, User, AgendaItem } = require("../models");
const withAuth = require("../utils/auth");
// const animatePlane = require("../public/javascript/animatePlane");
// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Vacay.findAll({
    where: {
      user_id: req.session.user_id,
    },
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
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbVacayData) => {
      const vacays = dbVacayData.map((vacay) => vacay.get({ plain: true }));
      //?how to do so that dashboard has multiple sections?
      res.render("dashboard", { vacays, loggedIn: true });
      // animatePlane;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
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
          "agenda_title",
          "vacay_id",
          "agenda_date",
          "agenda_start",
          "agenda_end",
          "location",
          "agenda_notes",
        ],
      },
    ],
  })
    .then((dbVacayData) => {
      // console.log(dbVacayData);
      if (dbVacayData) {
        const vacay = dbVacayData.get({ plain: true });

        res.render("edit-vacay", {
          vacay,
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
//todo ^ might need to change if edit and show are combined

router.get("/calendar/:id", withAuth, (req, res) => {
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
        model: Event,
        attributes: [
          "title",
          // "vacay_id",
          "start",
          "startTime",
          "endTime",
          // "location",
          "description",
        ],
      },
    ],
  })
    .then((dbVacayData) => {
      // console.log(dbVacayData);
      if (dbVacayData) {
        const vacay = dbVacayData.get({ plain: true });

        res.render("calendar", {
          vacay,
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

module.exports = router;
