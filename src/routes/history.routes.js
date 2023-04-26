import express from "express";
import History from "../models/history.model";

const router = express.Router();

router.get("/", async (req, res) => {
  const histories = await History.findAll();
  console.log(histories);
  res.json(histories);
});

module.exports = router;
