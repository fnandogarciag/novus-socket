import Sequelize from 'sequelize';
import config from '../config/index.js';
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
