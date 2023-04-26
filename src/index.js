import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

import initialSetUp from "./initialSetUp";
initialSetUp();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

import socket from "./socket";
socket(server, app);
import routes from "./routes";
routes(app);

import { port } from "./config";
const PORT = port || 3000;
server.listen(PORT, () => {
  console.log("listening on *:" + PORT);
});
