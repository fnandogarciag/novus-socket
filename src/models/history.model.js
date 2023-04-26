import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize";
import User from "./user.model";

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
