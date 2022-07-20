// import all models
const Vacay = require("./Vacay");
const User = require("./User");
// const PackingItem = require("./PackingItem");
const AgendaItem = require("./AgendaItem");

// create associations
User.hasMany(Vacay, {
  foreignKey: "user_id",
});

Vacay.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

AgendaItem.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

AgendaItem.belongsTo(Vacay, {
  foreignKey: "vacay_id",
  onDelete: "SET NULL",
});

User.hasMany(AgendaItem, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vacay.hasMany(AgendaItem, {
  foreignKey: "vacay_id",
});

module.exports = { User, Vacay, AgendaItem };
