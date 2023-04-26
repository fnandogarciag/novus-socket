const express = require("express");

const historyRouter = require("./history.routes");
// const socketRouter = require("./socket.routes");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/history", historyRouter);
};

module.exports = routerApi;
