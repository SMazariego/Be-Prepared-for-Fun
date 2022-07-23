// import all models
const Vacay = require("./Vacay");
const User = require("./User");
const PackingItem = require("./PackingItem");
const AgendaItem = require("./AgendaItem");
const Event = require("./Event");
// create associations
User.hasMany(Vacay, {
  foreignKey: "user_id",
});

Vacay.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vacay.hasMany(PackingItem, {
  foreignKey: "vacay_id",
});

PackingItem.belongsTo(Vacay, {
  foreignKey: "vacay_id",
  onDelete: "CASCADE",
});

Vacay.hasMany(AgendaItem, {
  foreignKey: "vacay_id",
});

AgendaItem.belongsTo(Vacay, {
  foreignKey: "vacay_id",
  onDelete: "CASCADE",
});

Vacay.hasMany(Event, {
  foreignKey: "vacay_id",
});

Event.belongsTo(Vacay, {
  foreignKey: "vacay_id",
  onDelete: "CASCADE",
});

module.exports = { User, Vacay, AgendaItem, PackingItem, Event };
