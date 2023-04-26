const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Role = sequelize.define("roles", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
});

module.exports = Role;
