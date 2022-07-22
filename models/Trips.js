const { Model, DataTypes } = require('sequelize');

// create our User model
class Trips extends Model {}

Trips.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        trip_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trip_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trip_start: {
            type: DataTypes.DATE,
        },
        trip_end: {
            type: DataTypes.DATE
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        }
    },
    {sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips'
    }
);

module.exports = Trips;