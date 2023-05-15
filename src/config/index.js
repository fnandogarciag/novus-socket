import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 4500,
  /**Db */
  dbName: process.env.DB_NAME || "db",
  dbUser: process.env.DB_USER || "test",
  dbPass: process.env.DB_PASS || "test123",
  dbHost: process.env.DB_HOST || "localhost"
};
