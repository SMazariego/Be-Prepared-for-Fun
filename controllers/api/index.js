const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const vacayRoutes = require("./vacay-routes");
const agendaRoutes = require("./agenda-item-routes");
// const packingListRoutes = require("./packing-list-routes");
// const packingItemRoutes = require("./packing-item-routes");

router.use("/users", userRoutes);
router.use("/vacay", vacayRoutes);
router.use("/agenda", agendaRoutes);
// router.use("/packing", packingListRoutes);
// router.use("/packing/item", packingItemRoutes);
//? do we need to put packing item there if it will be displayed under packing list???

module.exports = router;
