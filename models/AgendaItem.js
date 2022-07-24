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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    //todo maybe change to event length instead and auto calculate time ends
    endTime: {
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
