const { AgendaItem } = require("../models");

const agendadata = [
  {
    agenda_text:
      "Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball.",
    user_id: 1,
    vacay_id: 1,
  },

];

const seedAgendaItems = () => AgendaItem.bulkCreate(agendadata);

module.exports = seedAgendaItems;
