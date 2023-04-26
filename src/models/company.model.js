const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Company = sequelize.define("companies", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
});

module.exports = Company;
