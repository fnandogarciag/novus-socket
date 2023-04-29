require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
// require("./initialSetUp")();

require("./routes/_index")(app);
require("./socket/_index")(server, app);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("listening on *:" + PORT);
});
