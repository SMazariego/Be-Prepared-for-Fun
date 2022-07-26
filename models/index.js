// import all models
const Vacay = require("./Vacay");
const User = require("./User");
const PackingItem = require("./PackingItem");
const AgendaItem = require("./AgendaItem");
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
//packing items linked already. this is indicating that one vacation can have many packing items and that the items belong to a single vacation so will delete if the vacation is deleted.
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

module.exports = { User, Vacay, AgendaItem, PackingItem };
