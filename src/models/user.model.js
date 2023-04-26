import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize";
import Role from "./role.model";
import Company from "./company.model";

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
