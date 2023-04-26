const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

// require("./initialSetUp")();
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

require("./socket")(server, app);
require("./routes")(app);

const { port } = require("./config");
const PORT = port || 3000;
server.listen(PORT, () => {
  console.log("listening on *:" + PORT);
});
