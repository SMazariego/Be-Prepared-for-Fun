//use "Comments" for agenda item and packing list item models like this one

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PackingItem extends Model {}

PackingItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    packing_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    //todo figure out boolean or checkbox of some sort
    packed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    vacay_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "vacay",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "packingItem",
  }
);

module.exports = PackingItem;
