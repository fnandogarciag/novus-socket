const express = require("express");
const History = require("../models/history.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const histories = await History.findAll();
  res.json(histories);
});

module.exports = router;
