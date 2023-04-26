import express from "express";

import historyRouter from "./history.routes";
// import socketRouter from "./socket.routes";

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/history", historyRouter);
};

module.exports = routerApi;
