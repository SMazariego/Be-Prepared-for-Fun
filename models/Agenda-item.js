//use "Comments" for agenda item and packing list item models like this one

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AgendaItem extends Model {}

AgendaItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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
    modelName: "agendaItem",
  }
);

module.exports = AgendaItem;
