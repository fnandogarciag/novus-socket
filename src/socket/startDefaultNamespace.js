module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.join(socket.handshake.query.id === "1" ? "admin" : "driver");
    socket.on("s_location", (msg) => {
      io.in("admin").emit("r_location", {
        id: socket.handshake.query.id,
        name: socket.name,
        ...msg
      });
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
