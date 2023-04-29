const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const { relationOneToMany } = require("./_index");
const Role = require("./role.model");

const User = sequelize.define("users", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
});

relationOneToMany({ One: Role, ToMany: User, foreignKey: "roleId" });

module.exports = User;
