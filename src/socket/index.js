const { Server } = require("socket.io");

const createSocket = (server, app) => {
  const io = new Server(server);
  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  io.use((socket, next) => {
    console.log(socket.handshake.query);
    if (!socket.handshake.query.company) {
      return next(new Error("Authentication error: Token not provided."));
    }
    return next();
  });

  io.on("connection", (socket) => {
    socket.join(socket.handshake.query.company + (socket.handshake.query.admin ? "admin" : ""));
    socket.on("s_location", (msg) => {
      io.in(socket.handshake.query.company + "admin").emit("r_location", msg);
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = createSocket;
