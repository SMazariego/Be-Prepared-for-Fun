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
// router.get("/:id", withAuth, (req, res) => {
//   res.render("calendar", { vacay_id: req.params.id });
// });

// router.get("/:id", withAuth, (req, res) => {
//   Vacay.findByPk({
//     where: {
//       id: req.params.id,
//     },
//     attributes: [
//       "id",
//       "title",
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
//           "title",
//           "vacay_id",
//           "start",
//           "startTime",
//           "endTime",
//           "location",
//           "agenda_notes",
//         ],
//       },
//     ],
//   })
//     .then((dbVacayData) => {
//       if (dbVacayData) {
//         const events = dbVacayData.get({ plain: true });

//         res.render("calendar", {
//           events,
//           loggedIn: true,
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
