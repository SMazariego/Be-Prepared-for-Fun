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
      type: DataTypes.STRING,
      allowNull: false,
    },
    //todo maybe change to event length instead and auto calculate time ends
    end: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // figure out how to make it an address
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
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
