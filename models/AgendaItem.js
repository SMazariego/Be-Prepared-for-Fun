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
    agenda_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    agenda_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    agenda_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    //todo maybe change to event length instead and auto calculate time ends
    agenda_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    // figure out how to make it an address
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    agenda_notes: {
      type: DataTypes.STRING,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    // },
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
