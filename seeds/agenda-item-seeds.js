const { AgendaItem } = require("../models");

const agendadata = [
  {
    agenda_title: "flight",
    agenda_date: "2022-11-05",
    agenda_start: "06:32:00",
    agenda_end: "14:55:00",
    location: "the sky",
    agenda_notes: "Sue will join on a later flight",
    vacay_id: 1,
  },
  {
    agenda_title: "dinner",
    agenda_date: "2022-11-08",
    agenda_start: "16:10:00",
    agenda_end: "22:00:00",
    location: "The Luau Grill",
    agenda_notes: "luau show followed by buffet dinner. Bobby has the tickets",
    vacay_id: 1,
  },
  {
    agenda_title: "beach picnic",
    agenda_date: "2022-11-11",
    agenda_start: "10:00:00",
    agenda_end: "14:00:00",
    location: "Kaanapali beach",
    agenda_notes: "Pot Luck",
    vacay_id: 1,
  },
  {
    agenda_title: "leaving 😭",
    agenda_date: "2022-11-13",
    agenda_start: "16:32:00",
    agenda_end: "23:59:00",
    location: "the sky",
    agenda_notes: "Dan picking us up at msp",
    vacay_id: 1,
  },
];

const seedAgendaItems = () => AgendaItem.bulkCreate(agendadata);

module.exports = seedAgendaItems;
