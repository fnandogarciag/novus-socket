const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const Role = require("./role.model");
const Company = require("./company.model");

const User = sequelize.define("users", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
});

Role.belongsToMany(User, { through: "ActorMovies" });
User.belongsToMany(Role, { through: "ActorMovies" });

Company.belongsToMany(User, { through: "ActorMovies" });
User.belongsToMany(Company, { through: "ActorMovies" });

module.exports = User;
