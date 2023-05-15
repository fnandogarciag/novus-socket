import { Server } from "socket.io";

import preMiddlewares from "./preMiddlewares.js";
import eventReceiveDriver from "./eventReceiveDriver.js";

const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.use(preMiddlewares);

  const onConnection = (socket) => {
    socket.join(socket.handshake.query.id === "1" ? "admin" : "driver");
    eventReceiveDriver(io, socket);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  };

  io.on("connection", onConnection);
};

export default initSocket;
