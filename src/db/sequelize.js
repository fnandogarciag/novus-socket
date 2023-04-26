const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: "postgres",
  logging: false
});

module.exports = sequelize;
