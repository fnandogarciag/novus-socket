import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize";

const Company = sequelize.define("companies", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
});

module.exports = Company;
