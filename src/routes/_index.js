module.exports = (app) => {
  const express = require("express");
  const path = require("path");

  const router = express.Router();

  const views = path.join(__dirname, "../views");

  app.get("/", (req, res) => {
    res.sendFile(views + "/index.html");
  });

  app.use("/api/v1", router);

  const historyRouter = require("./history.routes");
  router.use("/history", historyRouter);
};
