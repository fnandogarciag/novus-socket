import Usuario from "../models/usuario.model.js";

const preMiddlewares = async (socket, next) => {
  if (!socket.handshake.query.id) {
    return next(new Error("Authentication error: Token not provided."));
  }
  if (socket.handshake.query.id !== "1") {
    const user = await Usuario.findByPk(socket.handshake.query.id, { raw: true });
    socket.data = user;
  }
  next();
};

export default preMiddlewares;
