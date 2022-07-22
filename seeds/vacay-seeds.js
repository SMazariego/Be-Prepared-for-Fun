const { Vacay } = require("../models");

const vacaydata = [
  {
    title: "Test Vacation 1",
    user_id: 1,
    start_date: "2022-11-05",
    end_date: "2022-11-13",
    destination: "Hawaii",
  },
];

const seedVacays = () => Vacay.bulkCreate(vacaydata);

module.exports = seedVacays;
