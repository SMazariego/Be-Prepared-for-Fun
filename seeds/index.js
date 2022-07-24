const seedUsers = require("./user-seeds");
const seedVacays = require("./vacay-seeds");
const seedAgendaItems = require("./agenda-item-seeds");
const seedPackingItems = require("./packing-item-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  // await seedUsers();
  // console.log("--------------");

  await seedVacays();
  console.log("--------------");

  await seedAgendaItems();
  console.log("--------------");

  await seedPackingItems();
  console.log("--------------");

  process.exit(0);
};

seedAll();
