module.exports = (io) => {
  io.use((socket, next) => {
    console.log(socket.handshake.query);
    if (!socket.handshake.query.id) {
      return next(new Error("Authentication error: Token not provided."));
    }
    if (socket.handshake.query.id !== "1") {
      socket.name = `driver${socket.handshake.query.id - 1}`;
    }
    return next();
  });
};
