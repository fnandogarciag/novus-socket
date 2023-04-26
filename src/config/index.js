require("dotenv").config();

export default {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME || "db",
  dbUser: process.env.DB_USER || "test",
  dbPass: process.env.DB_PASS || "test123",
  dbHost: process.env.DB_HOST || "localhost"
};
