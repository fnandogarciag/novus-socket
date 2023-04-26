const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const User = require("./user.model");

const History = sequelize.define("histories", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  xPos: DataTypes.DOUBLE,
  yPos: DataTypes.DOUBLE
});

User.hasMany(History);
History.belongsTo(User);

module.exports = History;
