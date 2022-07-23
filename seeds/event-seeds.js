const { AgendaItem } = require("../models");

const agendadata = [
  {
    title: "flight",
    start: "2022-11-05",
    startTime: "06:32:00",
    endTime: "14:55:00",
    location: "the sky",
    description: "Sue will join on a later flight",
    vacay_id: 1,
  },
  {
    title: "dinner",
    start: "2022-11-08",
    startTime: "16:10:00",
    endTime: "22:00:00",
    location: "The Luau Grill",
    description: "luau show followed by buffet dinner. Bobby has the tickets",
    vacay_id: 1,
  },
  {
    title: "beach picnic",
    start: "2022-11-11",
    startTime: "10:00:00",
    endTime: "14:00:00",
    location: "Kaanapali beach",
    description: "Pot Luck",
    vacay_id: 1,
  },
  {
    title: "leaving 😭",
    start: "2022-11-13",
    startTime: "16:32:00",
    endTime: "23:59:00",
    location: "the sky",
    description: "Dan picking us up at msp",
    vacay_id: 1,
  },
];

const seedAgendaItems = () => AgendaItem.bulkCreate(agendadata);

module.exports = seedAgendaItems;
