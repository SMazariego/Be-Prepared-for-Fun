const router = require("express").Router();
const sequelize = require("../config/connection");
const { Vacay, User, AgendaItem, PackingItem } = require("../models");
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
      {
        model: AgendaItem,
        attributes: ["id"],
      },
    ],
  })
    .then((dbVacayData) => {
      const vacays = dbVacayData.map((vacay) => vacay.get({ plain: true }));
      // console.log("agendaItems", vacay.agendaItems.length);
      // console.log("AgendaItems", vacay.AgendaItems.length);
      console.log("testing");
      console.log(vacays);
      res.render("dashboard", { vacays, loggedIn: true });
      // animatePlane;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  console.log(req.params.id);
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
          "display_date",
          "start_time",
          "end_time",
          "location",
          "agenda_notes",
        ],
      },
    ],
  })
    .then((dbVacayData) => {
      // console.log(dbVacayData);
      if (dbVacayData) {
        console.log(dbVacayData);
        const vacay = dbVacayData.get({ plain: true });
        console.log(vacay);
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

//add route for rendering packing list page when the button is clicked
router.get("/packing/:id", withAuth, (req, res) => {
  Vacay.findByPk(req.params.id, {
    attributes: ["id", "title"],
    include: [
      {
        model: PackingItem,
        attributes: ["id", "packing_text"],
      },
    ],
  })
    .then((dbVacayData) => {
      // console.log(dbVacayData);
      if (dbVacayData) {
        const vacay = dbVacayData.get({ plain: true });

        res.render("packing", {
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
