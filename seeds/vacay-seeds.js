const { Vacay } = require("../models");

const vacaydata = [
  {
    title: "Test Vacation 1",
    user_id: 1,
  },
  
];

const seedVacays = () => Vacay.bulkCreate(vacaydata);

module.exports = seedVacays;
