const router = require("express").Router();
const { AgendaItem, Vacay } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  AgendaItem.findAll()
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// router.get("/:id", withAuth, (req, res) => {
//   res.render("calendar", { vacay_id: req.params.id });
// });

router.get("/:id", withAuth, (req, res) => {
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

// router.get("/:id", (req, res) => {
//   Vacay.findOne({
//     where: {
//       vacay_id: req.params.id,
//     },
//     attributes: [
//       "id",
//       "title",
//       "user_id",
//       "start_date",
//       "end_date",
//       "destination",
//       "created_at",
//     ],
//     include: [
//       {
//         model: AgendaItem,
//         attributes: [
//           "id",
//           "agenda_title",
//           "vacay_id",
//           "agenda_date",
//           "agenda_start",
//           "agenda_end",
//           "location",
//           "agenda_notes",
//         ],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbVacayData) => {
//       if (!dbVacayData) {
//         res.status(404).json({ message: "No Vacation found with this id" });
//         return;
//       }
//       res.json(dbVacayData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get("/", withAuth, (req, res) => {
//   AgendaItem.findAll()
//     .then((dbEventData) => res.json(dbEventData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post("/", withAuth, (req, res) => {
//   AgendaItem.create({
//     title: req.body.title,
//     start: req.body.start,
//     startTime: req.body.startTime,
//     endTime: req.body.endTime,
//     extendedProps: {
//       location: req.body.location,
//       vacay_id: req.body.vacay_id,
//     },
//     description: req.body.description,
//   })
//     .then((dbEventData) => res.json(dbEventData))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.put("/:id", withAuth, (req, res) => {
//   AgendaItem.update(
//     {
//       title: req.body.title,
//       start: req.body.start,
//       startTime: req.body.startTime,
//       endTime: req.body.endTime,
//       location: req.body.location,
//       description: req.body.description,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((dbEventData) => {
//       if (!dbEventData) {
//         res.status(404).json({ message: "No event found with this id!" });
//         return;
//       }
//       res.json(dbEventData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete("/:id", withAuth, (req, res) => {
//   AgendaItem.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbEventData) => {
//       if (!dbEventData) {
//         res.status(404).json({ message: "No event found with this id!" });
//         return;
//       }
//       res.json(dbEventData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
