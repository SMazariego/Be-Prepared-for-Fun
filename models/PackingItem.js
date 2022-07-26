// pull in requirements from sequelize. same as agenda item
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PackingItem extends Model {}

PackingItem.init(
  {
    //add attributes
    //add id as primary key, integer, can't be null, and autoincremented to be unique
    //packing text will be a string at least 1 character long and can't be null
    //vacay_id will be linked as a foreign key like we have in agenda item
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
    //this isn't working so we can just have it a future dev for now
    // figure out boolean or checkbox of some sort
    // packed: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
    vacay_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "vacay",
        key: "id",
      },
    },
  },
  //summary model info, same as agenda item
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "packingItem",
  }
);

//"export" the module to use elsewhere

module.exports = PackingItem;
