const router = require("express").Router();
const sequelize = require("../config/connection");
const { Vacay, User, AgendaItem } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Vacay.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      //todo add what attributes we want
      "id",
      "title",
      "created_at",
    ],
    include: [
      {
        model: AgendaItem,
        //todo add what attributes we want
        attributes: ["id", "agenda_text", "vacay_id", "user_id", "created_at"],
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
      const vacays = dbVacayData.map((vacay) => vacay.get({ plain: true }));
      //?how to do so that dashboard has multiple sections?
      res.render("dashboard", { vacays, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/api/vacay/:id", withAuth, (req, res) => {
  Vacay.findByPk(req.params.id, {
    attributes: [
      //todo add what attributes we want
      "id",
      "title",
      "created_at",
    ],
    include: [
      {
        model: AgendaItem,
        //todo add what attributes we want
        attributes: ["id", "agenda_text", "vacay_id", "user_id", "created_at"],
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
      if (dbVacayData) {
        const vacay = dbVacayData.get({ plain: true });

        res.render("single-vacay", {
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

module.exports = router;
