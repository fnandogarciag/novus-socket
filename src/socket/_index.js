module.exports = (server) => {
  const { Server } = require("socket.io");

  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  require("./addSocketMiddlewares")(io);

  require("./startDefaultNamespace")(io);
};
