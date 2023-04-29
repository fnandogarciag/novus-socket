const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const User = require("./user.model");
const { relationOneToMany } = require("./_index");

const History = sequelize.define("histories", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  xPos: DataTypes.DOUBLE,
  yPos: DataTypes.DOUBLE
});

relationOneToMany({ One: User, ToMany: History, foreignKey: "userId" });

module.exports = History;
