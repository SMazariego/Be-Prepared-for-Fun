const { PackingItem } = require("../models");

const packingdata = [
  {
    packing_text: "sunscreen",
    packed: true,
    vacay_id: 1,
  },
  {
    packing_text: "swim suit",
    packed: false,
    vacay_id: 1,
  },
  {
    packing_text: "tooth brush",
    packed: false,
    vacay_id: 1,
  },
  {
    packing_text: "tickets",
    packed: true,
    vacay_id: 1,
  },
  {
    packing_text: "passport",
    packed: false,
    vacay_id: 1,
  },
  {
    packing_text: "pajamas",
    packed: false,
    vacay_id: 1,
  },
  {
    packing_text: "beach bag",
    packed: false,
    vacay_id: 1,
  },
  {
    packing_text: "dress",
    packed: true,
    vacay_id: 1,
  },
  {
    packing_text: "sandals",
    packed: false,
    vacay_id: 1,
  },
  {
    packing_text: "undies",
    packed: false,
    vacay_id: 1,
  },
];

const seedPackingItems = () => PackingItem.bulkCreate(packingdata);

module.exports = seedPackingItems;
