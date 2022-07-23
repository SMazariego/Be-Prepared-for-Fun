const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
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
      type: DataTypes.DATE,
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

    description: {
      type: DataTypes.STRING,
    },
    extendedProps: {
      // figure out if allowed
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vacay_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "vacay",
          key: "id",
        },
      },
    },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
